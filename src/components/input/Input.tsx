import { useWindowWidth } from "hooks/useWindowWidth";

import { IInput } from "./types";
import * as Styles from "./styles";

const Input = ({ type, name, placeholder, value, onChange }: IInput) => {
  const size = useWindowWidth();

  return (
    <Styles.Wrapper>
      <Styles.Input
        type={type}
        name={name}
        value={value}
        windowWidth={size}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Styles.Wrapper>
  );
};

export { Input };
