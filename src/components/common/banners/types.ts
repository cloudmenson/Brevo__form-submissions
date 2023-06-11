import { ReactNode } from "react";

export type bgcolor = "purpureus" | "caeruleum" | "rubeus";

export interface IBanners {
  text: string;
  icon?: ReactNode;
  bgcolor?: bgcolor;
}
