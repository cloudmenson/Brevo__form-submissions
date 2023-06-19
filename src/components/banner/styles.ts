import styled, { css } from "styled-components";

import { gilroySemibold } from "fonts";

export const Wrapper = styled.div<{ bgcolor?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;

  ${({ theme, bgcolor }) => css`
    @font-face {
      font-family: gilroy_semibold;
      src: url(${gilroySemibold}) format("woff2");
    }

    background-color: ${bgcolor === "purple"
      ? theme.colors.purple
      : bgcolor === "whiteBlue"
      ? theme.colors.whiteBlue
      : bgcolor === "red"
      ? theme.colors.red
      : null};

    padding: ${bgcolor === "purple"
      ? "12px 24px"
      : bgcolor === "whiteBlue"
      ? "7px 19px"
      : bgcolor === "red"
      ? "6px 12px"
      : ""};
    border-radius: ${bgcolor === "purple" ? "10px" : "5px"};

    ${theme.responsive.isMobile &&
    css`
      padding: ${bgcolor === "purple"
        ? "4px 9px"
        : bgcolor === "whiteBlue"
        ? "4px 14px"
        : bgcolor === "red"
        ? "2px 9px"
        : ""};
      border-radius: ${bgcolor === "purple" ? "6px" : "3px"};

      p {
        font-size: ${bgcolor === "purple"
          ? "11px"
          : bgcolor === "whiteBlue"
          ? "12px"
          : bgcolor === "red"
          ? "16px"
          : ""};
      }
    `}
  `}
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  font-family: gilroy_semibold;
`;

export const Icon = styled.span`
  svg {
    width: 15px;
    height: 15px;
  }

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      svg {
        width: 12px;
        height: 12px;
      }
    `}
`;
