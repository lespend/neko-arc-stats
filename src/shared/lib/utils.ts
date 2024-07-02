import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTopPlayerPostfix(index: number): string {
  const postfix = ["👑", "🥈", "🥉"]
  if (index <= 2 && index >= 0) {
    return postfix[index]
  }
  return ""
}
