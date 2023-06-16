import { Logo, Banner } from "components";
// import { Logo } from "components/logo/Logo";
import { getTranslatedText } from "components/local/getTranslatedText";

import * as Image from "assets";
import * as Styles from "./styles";

const Header = () => {
  return (
    <Styles.Wrapper>
      <Logo />

      <Styles.TimesWrapper>
        <Banner
          icon={<Image.Calendar />}
          text={getTranslatedText("header.month")}
        />
        <Banner text={getTranslatedText("header.time")} icon={<Image.Time />} />
      </Styles.TimesWrapper>
    </Styles.Wrapper>
  );
};

export { Header };
