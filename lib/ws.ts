import type { WsEvent } from "./types";

export const parseWsEvent = (payload: MessageEvent<string>): WsEvent | null => {
  try {
    const data = JSON.parse(payload.data) as WsEvent;
    if (!data?.type) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
};
