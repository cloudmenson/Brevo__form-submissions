import styled, { css } from "styled-components";

import { gilroyRegular } from "fonts";

import { IWindowWidth } from "./types";

export const Wrapper = styled.div`
  margin-top: 14px;
`;

export const Input = styled.input<IWindowWidth>`
  width: 204px;
  padding: 14px 22px;
  font-size: 13px;
  line-height: 24px;
  border-radius: 5px;
  font-family: gilroy_regular;

  ${({ theme, windowWidth }) => css`
    @font-face {
      font-family: gilroy_regular;
      src: url(${gilroyRegular}) format("woff2");
    }

    color: ${theme.colors.white};
    background-color: ${theme.colors.inputBackground};

    &::placeholder {
      color: ${theme.colors.grey};
    }

    ${theme.responsive.isMobile &&
    css`
      padding: 11px 26px;
      width: 242px;
      font-size: 12px;
      line-height: 22px;
    `}

    ${windowWidth < 767 &&
    windowWidth > 375 &&
    theme.responsive.isMobile &&
    css`
      width: 301px;
    `}
  `};
`;
