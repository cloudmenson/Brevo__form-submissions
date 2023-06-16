import { SignUp, Banner, ExperienceInfo } from "components";
import { getTranslatedText } from "components/local/getTranslatedText";

import * as Image from "assets";
import * as Styles from "./styles";

const PresentSection = () => {
  return (
    <Styles.Section>
      <Styles.Offer>
        <Styles.StyleWebinar>
          <Banner
            bgcolor="caeruleum"
            icon={<Image.Globe />}
            text={getTranslatedText("presentSection.webinar")}
          />
        </Styles.StyleWebinar>

        <Styles.TitleH2>
          {getTranslatedText("presentSection.frontEndTitle")}
        </Styles.TitleH2>

        <Styles.IntroStyles>
          <Styles.StyleFromZero>
            <Banner
              bgcolor="rubeus"
              text={getTranslatedText("presentSection.fromZero")}
            />
          </Styles.StyleFromZero>

          <Styles.EasyStart>
            {getTranslatedText("presentSection.startIT")}
          </Styles.EasyStart>
        </Styles.IntroStyles>

        <Styles.AboutWebinar>
          {getTranslatedText("presentSection.learnHow")}&nbsp;
          <Styles.Span>
            {getTranslatedText("presentSection.whatSkills")}&nbsp;
          </Styles.Span>
          {getTranslatedText("presentSection.howToStartCareer")}
          <Styles.SalarySpan>
            <Styles.Salary>
              {getTranslatedText("presentSection.withSalary")}
            </Styles.Salary>
            <Banner
              bgcolor="caeruleum"
              text={getTranslatedText("presentSection.potentialSalary")}
            />
          </Styles.SalarySpan>
        </Styles.AboutWebinar>

        <Styles.ExperienceWrapper>
          <ExperienceInfo
            uppercase="true"
            src={Image.developer}
            alt={getTranslatedText("experienceInfo.developerAlt")}
            text={getTranslatedText("experienceInfo.developerText")}
            title={getTranslatedText("experienceInfo.developerTitle")}
          />

          <ExperienceInfo
            top={16}
            width={210}
            src={Image.gift}
            alt={getTranslatedText("experienceInfo.giftAlt")}
            text={getTranslatedText("experienceInfo.giftText")}
            title={getTranslatedText("experienceInfo.giftTitle")}
          />
        </Styles.ExperienceWrapper>
      </Styles.Offer>

      <SignUp />

      <Styles.FrontEndDeveloper src={Image.frontend} />
      <Styles.Html src={Image.html} />
      <Styles.Css src={Image.css} />
      <Styles.Js src={Image.js} />
      <Styles.SublimeText src={Image.sublime} />
      <Styles.VsCode src={Image.vscode} />
    </Styles.Section>
  );
};

export { PresentSection };
