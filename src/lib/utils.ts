import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToLocaleString(num: number) {
  return num.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

export function formatAmount(amount: string): number {
  const bigIntAmount = BigInt(amount);

  const amountStr = bigIntAmount.toString().padStart(19, "0");

  const integerPart = amountStr.slice(0, -18).replace(/^0+/, "") || "0";
  const decimalPart = amountStr.slice(-18);

  return parseFloat(`${integerPart}.${decimalPart}`);
}

export function formatTxID(txID: string): string {
  if (txID.length <= 8) {
    return txID;
  }
  const start = txID.slice(0, 4);
  const end = txID.slice(-3);
  return `${start}...${end}`;
}

export function copyToClipboard(text: string | null) {
  if (!text) return;
  navigator.clipboard.writeText(text);
}
