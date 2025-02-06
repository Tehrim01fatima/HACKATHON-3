
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react";
import { Slot, SlotProps, Root, Slottable } from "@radix-ui/react-slot";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
