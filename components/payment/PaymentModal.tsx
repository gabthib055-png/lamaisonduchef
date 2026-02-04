"use client";

import { useEffect, useMemo, useState } from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { CartState, SplitMode } from "@/lib/types";
import { calculateTotals, splitPayment } from "@/lib/cart";
import { createPaymentIntent } from "@/lib/api";
import { useToast } from "@/hooks/useToast";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  cart: CartState;
}

export const PaymentModal = ({ open, onClose, cart }: PaymentModalProps) => {
  const { pushToast } = useToast();
  const [tipPercent, setTipPercent] = useState(10);
  const [splitMode, setSplitMode] = useState<SplitMode>("equal");
  const [participants, setParticipants] = useState(2);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const totals = useMemo(
    () => calculateTotals(cart.items, tipPercent),
    [cart.items, tipPercent]
  );

  const splits = useMemo(() => {
    try {
      return splitPayment(totals.total, {
        mode: splitMode,
        participants,
      });
    } catch {
      return [];
    }
  }, [totals.total, splitMode, participants]);

  useEffect(() => {
    if (!open || !stripePromise) {
      return;
    }
    createPaymentIntent(cart)
      .then((data) => setClientSecret(data.clientSecret))
      .catch(() => {
        pushToast({
          kind: "error",
          title: "Paiement indisponible",
          description: "Vérifiez la configuration Stripe côté backend.",
        });
      });
  }, [open, cart, pushToast]);

  const handleConfirm = () => {
    pushToast({
      kind: "success",
      title: "Paiement initié",
      description: "En attente du webhook Stripe.",
    });
    window.setTimeout(() => {
      pushToast({
        kind: "success",
        title: "Webhook reçu",
        description: "Paiement confirmé (simulation).",
      });
      onClose();
    }, 1200);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/40 px-4">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-card">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-ink-500">Paiement</p>
            <h2 className="text-2xl font-semibold text-ink-900">
              Finalisez votre expérience
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-ink-500 transition duration-160 hover:text-ink-900"
          >
            Fermer
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-ink-700/10 bg-pearl-50 p-5">
            <h3 className="text-sm font-semibold text-ink-900">Résumé</h3>
            <div className="mt-4 space-y-2 text-sm text-ink-700">
              {cart.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1 text-sm text-ink-900">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{totals.subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span>Pourboire</span>
                <span>{totals.tip.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{totals.total.toFixed(2)} €</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-ink-700/10 p-4">
              <p className="text-sm font-semibold text-ink-900">Split & pourboire</p>
              <div className="mt-3 flex gap-2">
                {["equal", "custom"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSplitMode(mode as SplitMode)}
                    className={`rounded-full px-3 py-1 text-xs transition duration-160 ${
                      splitMode === mode
                        ? "bg-ink-900 text-white"
                        : "border border-ink-700/20 text-ink-600"
                    }`}
                  >
                    {mode === "equal" ? "Égal" : "Personnalisé"}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-ink-600">
                <span>Participants</span>
                <input
                  type="number"
                  min={1}
                  value={participants}
                  onChange={(event) => setParticipants(Number(event.target.value))}
                  className="w-16 rounded-md border border-ink-700/10 px-2 py-1 text-right"
                />
              </div>
              <div className="mt-3 text-xs text-ink-500">
                {splits.length > 0
                  ? `Répartition: ${splits.map((value) => `${value.toFixed(2)} €`).join(" · ")}`
                  : "Définissez les paramètres pour voir la répartition."}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-ink-600">
                <span>Pourboire (%)</span>
                <input
                  type="range"
                  min={0}
                  max={20}
                  value={tipPercent}
                  onChange={(event) => setTipPercent(Number(event.target.value))}
                  className="w-32 accent-ink-900"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-ink-700/10 p-4">
              <p className="text-sm font-semibold text-ink-900">Stripe Elements</p>
              {stripePromise && clientSecret ? (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: "stripe",
                      variables: {
                        colorPrimary: "#14141c",
                        colorText: "#14141c",
                        colorBackground: "#ffffff",
                      },
                    },
                  }}
                >
                  <div className="mt-3 rounded-xl border border-ink-700/10 p-3">
                    <PaymentElement />
                  </div>
                </Elements>
              ) : (
                <div className="mt-3 rounded-xl bg-pearl-50 p-4 text-xs text-ink-500">
                  Configurez Stripe pour activer le formulaire de paiement.
                </div>
              )}
              <button
                onClick={handleConfirm}
                className="mt-4 w-full rounded-full bg-ink-900 py-2 text-sm font-semibold text-pearl-50 transition duration-160 hover:bg-ink-800"
              >
                Confirmer le paiement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
