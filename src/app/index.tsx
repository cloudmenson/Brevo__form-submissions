import { GlobalStyles } from "theme/globalStyles";
import { ThemeProvider } from "styled-components";

import { theme } from "theme";
import { HomePage } from "components/pages/HomePage";

import * as Styles from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Styles.Wrapper>
        <HomePage />
      </Styles.Wrapper>
    </ThemeProvider>
  );
};

export { App };
