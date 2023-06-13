import { SignUp } from "components/sign-up/SignUp";
import { Banner } from "components/common/banner/Banner";
import { ExperienceInfo } from "components/common/experience-info/ExperienceInfo";

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
          Узнайте какими&nbsp;
          <Styles.Span>
            навычками должен обладать фронтенд разработчик в 2023 году&nbsp;
          </Styles.Span>
          и как начать карьеру в востребованной профессии
          <Styles.SalarySpan>
            <Styles.Salary>с зарплатой</Styles.Salary>
            <Banner text="от 1 000$" bgcolor="caeruleum" />
          </Styles.SalarySpan>
        </Styles.AboutWebinar>

        <Styles.ExperienceWrapper>
          <ExperienceInfo
            alt="Developer"
            uppercase="true"
            src={Image.developer}
            title="Кирилл Касатанов"
            text="6 лет коммерческого опыта с такими компаниями как Mercedes-benz и другими крупными корпорациями"
          />

          <ExperienceInfo
            top={16}
            alt="Gift"
            width={210}
            src={Image.gift}
            title="Бонус за регистрацию"
            text='PDF-файл "5 преимуществ профессии фронтенд разработчика"'
          />
        </Styles.ExperienceWrapper>
      </Styles.Offer>

      <SignUp />
    </Styles.Section>
  );
};

export { PresentSection };
