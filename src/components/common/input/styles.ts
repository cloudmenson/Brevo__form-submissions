import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const Input = styled.input`
  width: 204px;
  padding: 14px 22px;
  font-size: 13px;
  line-height: 24px;
  border-radius: 5px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.inputBackground};

    &::placeholder {
      color: ${theme.colors.grey};
    }
  `};
`;
