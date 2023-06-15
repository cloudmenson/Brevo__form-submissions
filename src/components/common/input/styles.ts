import styled, { css } from "styled-components";

import { gilroyRegular } from "fonts";

export const Wrapper = styled.div`
  margin-top: 14px;
`;

export const Input = styled.input`
  width: 204px;
  padding: 14px 22px;
  font-size: 13px;
  line-height: 24px;
  border-radius: 5px;

  ${css`
    @font-face {
      font-family: gilroy_regular;
      src: url(${gilroyRegular}) format("woff2");
    }
  `}

  font-family: gilroy_regular;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.inputBackground};

    &::placeholder {
      color: ${theme.colors.grey};
    }
  `};
`;
