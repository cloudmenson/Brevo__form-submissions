import styled, { css } from "styled-components";
import PhoneInput from "react-phone-number-input";

export const Wrapper = styled.div`
  padding: 50px 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 374px;
  border-radius: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.whitePurple};
`;

export const TitleH2 = styled.h2`
  width: 245px;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  word-break: break-word;
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
  color: ${({ theme }) => theme.colors.greyTransparent};
`;

export const PrivacyLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.greyTransparent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyTransparent};
`;
