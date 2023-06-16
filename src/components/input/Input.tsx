import { IInput } from "./types";
import * as Styles from "./styles";

const Input = ({ type, name, placeholder, value, onChange }: IInput) => {
  return (
    <Styles.Wrapper>
      <Styles.Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Styles.Wrapper>
  );
};

export { Input };
