import { GlobalStyles } from "src/theme/globalStyles";
import { ThemeProvider } from "styled-components";

import { theme } from "src/theme";
import { HomePage } from "src/components/HomePage";

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
