import { Logo, Banner } from "components";
import { useWindowWidth } from "hooks/useWindowWidth";
import { getTranslatedText } from "components/local/getTranslatedText";

import * as Image from "assets";
import * as Styles from "./styles";

const Header = () => {
  const size = useWindowWidth();

  return (
    <Styles.Wrapper windowWidth={size}>
      <Logo />

      <Styles.TimesWrapper>
        <Banner
          bgcolor="purple"
          icon={<Image.Calendar />}
          text={getTranslatedText("header.month")}
        />
        <Banner
          bgcolor="purple"
          icon={<Image.Time />}
          text={getTranslatedText("header.time")}
        />
      </Styles.TimesWrapper>
    </Styles.Wrapper>
  );
};

export { Header };
