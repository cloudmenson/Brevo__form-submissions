import { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { ChildrenProps } from "types";
import { THEME } from "config/theme/theme";
import { IsMobile, IsTablet, IsDesktop } from "hooks/styles";

export const ThemeWrap = ({ children }: ChildrenProps): JSX.Element => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const responsive = {
    isTablet: IsTablet(),
    isMobile: IsMobile(),
    isDesktop: IsDesktop(),
  };

  const value = useMemo(
    () => ({
      ...THEME,
      responsive,
    }),
    [responsive]
  );

  return <ThemeProvider theme={value}>{children}</ThemeProvider>;
};
