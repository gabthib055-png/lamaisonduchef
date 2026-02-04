import { expect, test } from "@playwright/test";

test("scan → commande multi-client → paiement → webhook", async ({ page }) => {
  await page.goto("/?table=5");
  await expect(page.getByText("Table 5 connectée")).toBeVisible();

  const addButtons = page.getByRole("button", { name: "Ajouter" });
  await addButtons.first().click();
  await addButtons.nth(1).click();

  await page.getByRole("button", { name: /Payer/ }).click();
  await expect(
    page.getByRole("heading", { name: "Finalisez votre expérience" })
  ).toBeVisible();

  await page.getByRole("button", { name: "Confirmer le paiement" }).click();
  await expect(page.getByText("Webhook reçu")).toBeVisible();
});
