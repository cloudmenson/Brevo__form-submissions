import styled, { css } from "styled-components";

import { gilroySemibold } from "fonts";

export const Wrapper = styled.div<{ bgcolor?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;

  ${css`
    @font-face {
      font-family: gilroy_semibold;
      src: url(${gilroySemibold}) format("woff2");
    }
  `}

  ${({ theme, bgcolor }) => css`
    background-color: ${bgcolor === "purpureus"
      ? theme.colors.purpureus
      : bgcolor === "caeruleum"
      ? theme.colors.caeruleum
      : bgcolor === "rubeus"
      ? theme.colors.rubeus
      : null};

    padding: ${bgcolor === "purpureus"
      ? "12px 24px"
      : bgcolor === "caeruleum"
      ? "10px 12px"
      : bgcolor === "rubeus"
      ? "6px 12px"
      : ""};
    border-radius: ${bgcolor === "purpureus" ? "10px" : "5px"};
  `}
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  font-family: gilroy_semibold;
`;

export const Icon = styled.span`
  width: 15px;
  height: 15px;
`;
