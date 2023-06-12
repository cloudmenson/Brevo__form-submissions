import styled, { css } from "styled-components";

import * as Image from "assets";
import { gilroyBold } from "fonts";

export const Wrapper = styled.div<{ top?: number }>`
  ${({ top }) => top && `margin-top: ${top}px;`};
  display: flex;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

export const Img = styled.img<{ src: string }>`
  ${({ src }) => css`
    width: ${src === Image.gift ? "38px" : "50px"};
    height: ${src === Image.gift ? "38px" : "50px"};
  `}
`;

export const TextWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4<{ uppercase?: string }>`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;

  ${({ uppercase }) => css`
    @font-face {
      font-family: gilroy_bold;
      src: url(${gilroyBold}) format("woff2");
    }

    font-family: gilroy_bold;
    text-transform: ${uppercase ? "uppercase" : "none"};
  `}
`;

export const Text = styled.p<{ width?: number }>`
  ${({ width }) => width && `width: ${width}px;`};
  font-size: 12px;
  line-height: 20px;
`;
