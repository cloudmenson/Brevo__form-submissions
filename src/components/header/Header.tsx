import { Logo } from "components/common/logo/Logo";
import { Banner } from "components/common/banner/Banner";

import * as Image from "assets";
import * as Styles from "./styles";

const Header = () => {
  return (
    <Styles.Wrapper>
      <Logo />

      <Styles.TimesWrapper>
        <Banner text="29 декабря" icon={<Image.Calendar />} />
        <Banner text="3,5 часа" icon={<Image.Time />} />
      </Styles.TimesWrapper>
    </Styles.Wrapper>
  );
};

export { Header };
