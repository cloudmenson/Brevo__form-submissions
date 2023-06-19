import { ReactNode } from "react";

export type bgcolor = "purple" | "whiteBlue" | "red";

export interface IBanners {
  text: string;
  icon?: ReactNode;
  bgcolor?: bgcolor;
}
