import styled, { css } from "styled-components";

import { gilroyBold } from "fonts";

export const Wrapper = styled.div`
  margin-top: 18px;
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
    background-color: ${({ theme }) => theme.colors.rubeus};
  `};
`;
