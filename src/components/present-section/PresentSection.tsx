import { useWindowWidth } from "hooks/useWindowWidth";
import { getTranslatedText } from "components/local/getTranslatedText";
import { SignUp, Banner, ExperienceInfo, Responsive } from "components";

import * as Image from "assets";
import * as Styles from "./styles";

const PresentSection = () => {
  const size = useWindowWidth();

  return (
    <Styles.Section windowWidth={size}>
      <Styles.Offer>
        <Styles.StyleWebinar>
          <Banner
            bgcolor="whiteBlue"
            icon={<Image.Globe />}
            text={getTranslatedText("presentSection.webinar")}
          />
        </Styles.StyleWebinar>

        <Styles.TitleH2 windowWidth={size}>
          {getTranslatedText("presentSection.frontEndTitle")}
        </Styles.TitleH2>

        <Styles.IntroStyles>
          <Styles.StyleFromZero>
            <Banner
              bgcolor="red"
              text={getTranslatedText("presentSection.fromZero")}
            />
          </Styles.StyleFromZero>

          <Styles.EasyStart windowWidth={size}>
            {getTranslatedText("presentSection.startIT")}
          </Styles.EasyStart>
        </Styles.IntroStyles>

        <Styles.AboutWebinar windowWidth={size}>
          {getTranslatedText("presentSection.learnHow")}&nbsp;
          <Styles.Span>
            {getTranslatedText("presentSection.whatSkills")}&nbsp;
          </Styles.Span>
          {getTranslatedText("presentSection.howToStartCareer")}
          <Responsive.NotMobile>
            <Styles.SalarySpan>
              <Styles.Salary>
                {getTranslatedText("presentSection.withSalary")}
              </Styles.Salary>
              <Banner
                bgcolor="whiteBlue"
                text={getTranslatedText("presentSection.potentialSalary")}
              />
            </Styles.SalarySpan>
          </Responsive.NotMobile>
          <Responsive.Mobile>
            <Styles.WithPotentialSalary>
              {getTranslatedText("presentSection.withPotentialSalary")}
            </Styles.WithPotentialSalary>
          </Responsive.Mobile>
        </Styles.AboutWebinar>

        <Responsive.Mobile>
          <SignUp />
        </Responsive.Mobile>

        <Responsive.NotMobile>
          <Styles.ExperienceWrapper>
            <ExperienceInfo
              uppercase="true"
              src={Image.developer}
              alt={getTranslatedText("experienceInfo.developerAlt")}
              text={getTranslatedText("experienceInfo.developerText")}
            >
              {getTranslatedText("experienceInfo.developerName")}
              <Styles.StyledWord>
                {getTranslatedText("experienceInfo.developerSurname")}
              </Styles.StyledWord>
            </ExperienceInfo>

            <ExperienceInfo
              top={16}
              src={Image.gift}
              alt={getTranslatedText("experienceInfo.giftAlt")}
              text={getTranslatedText("experienceInfo.giftTextDeveloper")}
            >
              {getTranslatedText("experienceInfo.giftTitle")}
            </ExperienceInfo>
          </Styles.ExperienceWrapper>
        </Responsive.NotMobile>

        <Responsive.Mobile>
          <Styles.ExperienceWrapper>
            <ExperienceInfo
              src={Image.gift}
              alt={getTranslatedText("experienceInfo.giftAlt")}
              text={getTranslatedText("experienceInfo.giftTextDesigner")}
            >
              {getTranslatedText("experienceInfo.giftTitle")}
            </ExperienceInfo>

            <ExperienceInfo
              top={22}
              uppercase="true"
              src={Image.developer}
              alt={getTranslatedText("experienceInfo.developerAlt")}
              text={getTranslatedText("experienceInfo.developerText")}
            >
              {getTranslatedText("experienceInfo.developerName")}
              <Styles.StyledWord>
                {getTranslatedText("experienceInfo.developerSurname")}
              </Styles.StyledWord>
            </ExperienceInfo>
          </Styles.ExperienceWrapper>
        </Responsive.Mobile>
      </Styles.Offer>

      <Responsive.NotMobile>
        <SignUp />
      </Responsive.NotMobile>

      <Responsive.Desktop>
        <Styles.FrontEndDeveloper src={Image.frontend} />
        <Styles.Html src={Image.html} />
        <Styles.Css src={Image.css} />
        <Styles.Js src={Image.js} />
        <Styles.SublimeText src={Image.sublime} />
        <Styles.VsCode src={Image.vscode} />
      </Responsive.Desktop>
    </Styles.Section>
  );
};

export { PresentSection };
