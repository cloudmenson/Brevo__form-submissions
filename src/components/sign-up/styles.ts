import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 374px;
  border-radius: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.obscurus};
`;

export const TitleH2 = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

export const ColorSpan = styled.span`
  color: ${({ theme }) => theme.colors.rubeus};
`;

export const Form = styled.form`
  :not(:first-of-type) {
    margin-top: 14px;
  }
`;
