import { Input } from "components/common/input/Input";
import { Button } from "components/common/button/Button";

import * as Styles from "./styles";

const SignUp = () => {
  return (
    <Styles.Wrapper>
      <Styles.TitleH2>
        Запишитесь&nbsp;
        <Styles.ColorSpan>бесплатно</Styles.ColorSpan>&nbsp; и получите подарок
      </Styles.TitleH2>

      <Styles.Form>
        <Input type="text" name="name" placeholder="Ваше имя и фамилия" />
        <Input type="tel" name="tel" placeholder="Ваш номер телефона" />
        <Input type="email" name="email" placeholder="Ваше email" />

        <Button text="записаться бесплатно" type="submit"/>
      </Styles.Form>
    </Styles.Wrapper>
  );
};

export { SignUp };
