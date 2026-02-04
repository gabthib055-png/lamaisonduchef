"use client";

import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { WsEvent } from "@/lib/types";
import { parseWsEvent } from "@/lib/ws";

type Status = "connecting" | "open" | "closed" | "error";

interface WebSocketContextValue {
  status: Status;
  lastEvent: WsEvent | null;
  send: (event: WsEvent) => void;
}

export const WebSocketContext = createContext<WebSocketContextValue | null>(null);

const WS_URL = process.env.NEXT_PUBLIC_WS_URL;

export const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<Status>("connecting");
  const [lastEvent, setLastEvent] = useState<WsEvent | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const retryRef = useRef(0);

  const connect = useCallback(() => {
    if (!WS_URL) {
      setStatus("error");
      return;
    }

    setStatus("connecting");
    const socket = new WebSocket(WS_URL);
    socketRef.current = socket;

    socket.addEventListener("open", () => {
      retryRef.current = 0;
      setStatus("open");
    });

    socket.addEventListener("message", (event) => {
      const parsed = parseWsEvent(event as MessageEvent<string>);
      if (parsed) {
        setLastEvent(parsed);
      }
    });

    socket.addEventListener("close", () => {
      setStatus("closed");
      const retry = Math.min(4, retryRef.current + 1);
      retryRef.current = retry;
      const delay = 1000 * retry;
      window.setTimeout(connect, delay);
    });

    socket.addEventListener("error", () => {
      setStatus("error");
    });
  }, []);

  useEffect(() => {
    connect();
    return () => {
      socketRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((event: WsEvent) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(event));
    }
  }, []);

  const value = useMemo(
    () => ({
      status,
      lastEvent,
      send,
    }),
    [status, lastEvent, send]
  );

  return <WebSocketContext.Provider value={value}>{children}</WebSocketContext.Provider>;
};
