import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const Wrapper = styled.header<IWindowWidth>`
  padding: 34px 0 124px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isMobile &&
    css`
      padding: 28px 0 32px;
    `}

    ${windowWidth > 319 &&
    windowWidth < 360 &&
    theme.responsive.isMobile &&
    css`
      flex-direction: column;
      align-items: center;
    `}
  `}
`;

export const TimesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
`;
