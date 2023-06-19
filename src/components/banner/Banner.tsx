import * as Styles from "./styles";
import { IBanners } from "./types";

const Banner = ({ text, icon, bgcolor}: IBanners) => {
  return (
    <Styles.Wrapper bgcolor={bgcolor}>
      {icon && <Styles.Icon>{icon}</Styles.Icon>}
      <Styles.Text>{text}</Styles.Text>
    </Styles.Wrapper>
  );
};

export { Banner };
