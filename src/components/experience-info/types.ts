import { ReactNode } from "react";

export interface IExperienceInfo {
  src: string;
  alt?: string;
  text: string;
  top?: number;
  width?: number;
  uppercase?: string;
  children: ReactNode;
}
