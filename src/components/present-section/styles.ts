import styled, { css } from "styled-components";

import { gilroySemibold, gilroyBold, gilroyExtrabold } from "fonts";

const fontWeight600 = css`
  font-weight: 600;
  font-family: gilroy_semibold;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

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

export const Offer = styled.div`
  max-width: 427px;
`;

export const StyleWebinar = styled.div`
  width: 120px;
`;

export const TitleH2 = styled.h2`
  font-size: 77px;
  line-height: 94px;
  font-weight: 800;
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: gilroy_extrabold;
    color: ${theme.colors.red};
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
  ${fontWeight600};

  padding-left: 16px;
  font-size: 22px;
  line-height: 26px;
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
  ${fontWeight600};
`;

export const SalarySpan = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: gilroy_bold;
  }
`;

export const Salary = styled.span`
  ${fontWeight600};

  margin-right: 8px;
`;

export const ExperienceWrapper = styled.div`
  margin-top: 52px;
`;

export const FrontEndDeveloper = styled.img`
  position: absolute;
  bottom: -31%;
  left: -28%;
`;

export const Html = styled.img`
  position: absolute;
  top: 4%;
  right: -25%;
`;

export const Css = styled.img`
  position: absolute;
  bottom: 52%;
  right: -14%;
`;

export const Js = styled.img`
  position: absolute;
  bottom: 42%;
  right: -26%;
`;

export const SublimeText = styled.img`
  position: absolute;
  bottom: 30%;
  right: -12%;
`;

export const VsCode = styled.img`
  position: absolute;
  bottom: 14%;
  right: -23%;
`;
