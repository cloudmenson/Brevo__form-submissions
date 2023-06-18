import { ThemeWrap } from "context";
import { GlobalStyles } from "styles/globalStyles";

import { HomePage } from "components/pages/HomePage";

import * as Styles from "./styles";

const App = () => {
  return (
    <ThemeWrap>
      <GlobalStyles />
      <Styles.Wrapper>
        <HomePage />
      </Styles.Wrapper>
    </ThemeWrap>
  );
};

export { App };
