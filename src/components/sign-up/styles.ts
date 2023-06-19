import styled, { css } from "styled-components";
import PhoneInput from "react-phone-number-input";

export const Wrapper = styled.div`
  margin-left: 135px;
  padding: 50px 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  text-align: center;

  ${({ theme }) => css`
    background-color: ${({ theme }) => theme.colors.whitePurple};

    ${theme.responsive.isTablet &&
    css`
      margin-left: 0;
      padding: 40px 40px 5px;
      width: 250px;
    `}

    ${theme.responsive.isMobile &&
    css`
      margin-left: 0;
      padding: 45px 18px;
      text-align: center;
    `}
  `}
`;

export const TitleH2 = styled.h2`
  width: 245px;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  word-break: break-word;

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      width: 223px;
      font-size: 20px;
      line-height: 23px;
    `}
`;

export const ColorSpan = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const Form = styled.form`
  position: relative;
`;

export const StyledPhoneInput = styled(PhoneInput)`
  margin-top: 14px;

  .PhoneInputCountrySelectArrow {
    display: none;
  }

  div {
    position: absolute;
    top: 30%;
    left: 82%;

    ${({ theme }) =>
      theme.responsive.isMobile &&
      css`
        top: 30%;
        left: 86%;
      `}
  }

  select {
    width: 27px;
    height: 18px;
    font-size: 18px;
  }

  input {
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

      ${theme.responsive.isMobile &&
      css`
        padding: 11px 26px;
        width: 242px;
        font-size: 12px;
        line-height: 22px;
      `}
    `};
  }
`;

export const FormikError = styled.span`
  position: absolute;
  left: 5px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.red};
`;

export const PrivacyPolicy = styled.div`
  margin-top: 20px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;

  ${({ theme }) => css`
    color: ${theme.colors.greyTransparent};

    ${theme.responsive.isMobile &&
    css`
      margin-top: 18px;
      font-size: 11px;
      line-height: 16px;
    `}
  `}
`;

export const PrivacyLink = styled.a`
  display: inline-block;

  ${({ theme }) => css`
    color: ${theme.colors.greyTransparent};
    border-bottom: 1px solid ${theme.colors.greyTransparent};
  `}
`;
