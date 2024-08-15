export const NETWORK = (import.meta.env.VITE_NETWORK ?? "main") as
  | "main"
  | "test";
export const NODE_URL =
  import.meta.env.VITE_NODE_URL ?? `https://${NETWORK}netc1.vechain.network`;

export const X_CONTRACT_ADDRESS =
  import.meta.env.VITE_X_CONTRACT_ADDRESS ??
  "0xb81E9C5f9644Dec9e5e3Cac86b4461A222072302";

export const VET_ICON = "VET_Token_Icon.webp";
export const VTHO_ICON = "VTHO_Token_Icon.webp";
export const VECHAIN_LOGO = "01-LogoVerticale_VShape_Colori_RGB.webp";
