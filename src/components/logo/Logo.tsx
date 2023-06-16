import { getTranslatedText } from "components/local/getTranslatedText";

import * as Image from "assets";
import * as Styles from "./styles";

const Logo = () => {
  return (
    <Styles.LogoWrapper>
      <Styles.HiddenH1>Powercode Academy</Styles.HiddenH1>

      <Image.Logo alt={getTranslatedText("logo.alt")} />
    </Styles.LogoWrapper>
  );
};

export { Logo };
