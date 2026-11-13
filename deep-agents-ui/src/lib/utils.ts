import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names and resolves Tailwind class conflicts.
 *
 * Restored per the shadcn/ui convention referenced by `components.json`
 * (`"utils": "@/lib/utils"`); this file was missing from the repo and
 * broke the production build.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
