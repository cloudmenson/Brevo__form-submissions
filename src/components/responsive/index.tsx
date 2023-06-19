import { ChildrenProps } from "types";
import { IsTablet, IsMobile, IsDesktop } from "hooks/styles";

export const Desktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return IsDesktop() ? <>{children}</> : null;
};

export const NotDesktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return !IsDesktop() ? <>{children}</> : null;
};

export const Tablet = ({ children }: ChildrenProps): JSX.Element | null => {
  return IsTablet() ? <>{children}</> : null;
};

export const NotTablet = ({ children }: ChildrenProps): JSX.Element | null => {
  return IsTablet() ? <>{children}</> : null;
};

export const Mobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return IsMobile() ? <>{children}</> : null;
};

export const NotMobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return !IsMobile() ? <>{children}</> : null;
};
