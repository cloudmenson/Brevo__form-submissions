import styled, { css } from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 182px;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      width: 100px;
    `}
  `}
`;

export const HiddenH1 = styled.h1`
  position: absolute;
  left: -9999px;
  top: -9999px;
`;
