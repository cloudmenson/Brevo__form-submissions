import styled, { css } from "styled-components";

import * as Image from "assets";
import { gilroyBold } from "fonts";

export const Wrapper = styled.div<{ top?: number }>`
  ${({ top }) => top && `margin-top: ${top}px;`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div``;

export const Img = styled.img<{ src: string }>`
  ${({ src, theme }) => css`
    width: ${src === Image.gift ? "38px" : "50px"};
    height: ${src === Image.gift ? "38px" : "50px"};

    ${theme.responsive.isMobile &&
    css`
      width: ${src === Image.gift ? "45px" : "50px"};
      height: ${src === Image.gift ? "45px" : "50px"};
    `}
  `}
`;

export const TextWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      width: 163px;
    `}
`;

export const Title = styled.h4<{ uppercase?: string }>`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;

  ${({ theme, uppercase }) => css`
    @font-face {
      font-family: gilroy_bold;
      src: url(${gilroyBold}) format("woff2");
    }

    font-family: gilroy_bold;
    text-transform: ${uppercase ? "uppercase" : "none"};

    ${theme.responsive.isMobile &&
    css`
      font-size: 14px;
      line-height: 20px;
    `}
  `}
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
`;
