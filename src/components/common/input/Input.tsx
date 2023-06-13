import { IInput } from "./types";
import * as Styles from "./styles";

const Input = ({ type, name, placeholder }: IInput) => {
  return (
    <Styles.Wrapper>
      <Styles.Input type={type} name={name} placeholder={placeholder} />
    </Styles.Wrapper>
  );
};

export { Input };
