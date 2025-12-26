import { BRANCHES } from "@/core/constants/branches";

export type Branch = typeof BRANCHES[keyof typeof BRANCHES]['value'];
