import { Header } from "./header/Header";
import { PresentSection } from "./present-section/PresentSection";

import * as Styles from "./styles";

const HomePage = () => {
  return (
    <Styles.Wrapper>
      <Header />
      <PresentSection />
    </Styles.Wrapper>
  );
};

export { HomePage };
