import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function delta(fValue:number, sValue:number) : number {
    return fValue - sValue;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}