import styled, { css } from "styled-components";

import { gilroySemibold, gilroyBold, gilroyExtrabold } from "fonts";

export const Section = styled.section`
  width: 427px;

  ${css`
    @font-face {
      font-family: gilroy_semibold;
      src: url(${gilroySemibold}) format("woff2");
    }

    @font-face {
      font-family: gilroy_bold;
      src: url(${gilroyBold}) format("woff2");
    }

    @font-face {
      font-family: gilroy_extrabold;
      src: url(${gilroyExtrabold}) format("woff2");
    }
  `}
`;

export const Offer = styled.div``;

export const StyleWebinar = styled.div`
  width: 120px;
`;

export const FrontEndText = styled.h2`
  font-size: 77px;
  line-height: 94px;
  font-weight: 800;
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: gilroy_extrabold;
    color: ${theme.colors.rubeus};
  `}
`;

export const StyleFromZero = styled.span`
  width: 106px;
  transform: rotate(-3.51deg);

  p {
    font-size: 23px;
    line-height: 29px;
    text-transform: uppercase;
    font-weight: 800;
    font-family: gilroy_extrabold;
  }
`;

export const EasyStart = styled.h3`
  padding-left: 16px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
  font-family: gilroy_semibold;
`;

export const IntroStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AboutWebinar = styled.div`
  padding-top: 20px;
  font-size: 18px;
  line-height: 26px;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const Salary = styled.span`
  margin-right: 8px;
`;
