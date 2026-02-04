"use client";

import { useContext } from "react";
import { WebSocketContext } from "@/components/realtime/WebSocketProvider";

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket doit être utilisé dans WebSocketProvider.");
  }
  return context;
};
