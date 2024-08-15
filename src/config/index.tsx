export const NETWORK = (import.meta.env.VITE_NETWORK ?? "main") as
  | "main"
  | "test";
export const NODE_URL =
  import.meta.env.VITE_NODE_URL ?? `https://${NETWORK}netc1.vechain.network`;

export const VET_ICON = "VET_Token_Icon.webp";
export const VTHO_ICON = "VTHO_Token_Icon.webp";
export const VECHAIN_LOGO = "01-LogoVerticale_VShape_Colori_RGB.webp";
