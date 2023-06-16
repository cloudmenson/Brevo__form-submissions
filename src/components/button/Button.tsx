import * as Styles from "./styles";
import { IButton } from "./types";

const Button = ({ type, text }: IButton) => {
  return (
    <Styles.Wrapper>
      <Styles.Button type={type}>{text}</Styles.Button>
    </Styles.Wrapper>
  );
};

export { Button };
