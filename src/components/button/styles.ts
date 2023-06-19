import styled, { css } from "styled-components";

import { gilroyBold } from "fonts";

export const Wrapper = styled.div`
  margin-top: 18px;

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      margin-top: 14px;
    `};
`;

export const Button = styled.button`
  padding: 13px 43px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 700;
  border-radius: 5px;

  ${({ theme }) => css`
    @font-face {
      font-family: gilroy_bold;
      src: url(${gilroyBold}) format("woff2");
    }

    font-family: gilroy_bold;
    color: ${theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red};

    ${theme.responsive.isMobile &&
    css`
      padding: 10px 32px;
      font-size: 14px;
      line-height: 22px;
      background-color: ${theme.colors.blue};
    `}
  `};
`;
