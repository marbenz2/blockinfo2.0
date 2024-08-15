export const NETWORK = (import.meta.env.VITE_NETWORK ?? "main") as
  | "main"
  | "test";
export const NODE_URL =
  import.meta.env.VITE_NODE_URL ?? `https://${NETWORK}netc1.vechain.network`;
