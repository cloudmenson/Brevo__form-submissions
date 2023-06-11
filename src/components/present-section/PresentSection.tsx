import { Banner } from "components/common/banners/Banners";

import * as Image from "assets";
import * as Styles from "./styles";

const PresentSection = () => {
  return (
    <Styles.Section>
      <Styles.Offer>
        <Styles.StyleWebinar>
          <Banner text="Вебинар" icon={<Image.Globe />} bgcolor="caeruleum" />
        </Styles.StyleWebinar>

        <Styles.FrontEndText>Front-end</Styles.FrontEndText>

        <Styles.IntroStyles>
          <Styles.StyleFromZero>
            <Banner text="С нуля" bgcolor="rubeus" />
          </Styles.StyleFromZero>

          <Styles.EasyStart>легкий старт в IT профессии</Styles.EasyStart>
        </Styles.IntroStyles>

        <Styles.AboutWebinar>
          Узнайте какими навычками должен обладать фронтенд разработчик в 2023
          году и как начать карьеру в востребованной профессии
          <Styles.Span>
            <Styles.Salary>с зарплатой</Styles.Salary>
            <Banner text="от 1 000$" bgcolor="caeruleum" />
          </Styles.Span>
        </Styles.AboutWebinar>
      </Styles.Offer>

      {/* <Styles.SignUp></Styles.SignUp> */}
    </Styles.Section>
  );
};

export { PresentSection };
