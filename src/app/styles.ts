import styled, { css } from "styled-components";

import * as Image from "assets";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${Image.backgroundPC});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.backgroundColor};

    ${theme.responsive.isMobile &&
    css`
      background: ${theme.colors.backgroundGradient};
    `}
  `}
`;
