import { useFormik } from "formik";

import { Input, Button } from "components";
import { sendEmail } from "service/emailService";
import { validationSchema } from "components/sign-up/config";
import { getTranslatedText } from "components/local/getTranslatedText";

import { ISignUp } from "./types";
import * as Styles from "./styles";
import "react-phone-number-input/style.css";

const SignUp = () => {  const handleSubmit = async (values: ISignUp) => {
    try {
      await sendEmail(values);
      alert(getTranslatedText("signUp.successAlert"));
      formik.resetForm();
    } catch (error) {
      alert(getTranslatedText("signUp.poorAlert"));
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Styles.Wrapper>
      <Styles.TitleH2>
        {getTranslatedText("signUp.signUpTitle")}&nbsp;
        <Styles.ColorSpan>{getTranslatedText("signUp.free")}</Styles.ColorSpan>&nbsp;
        {getTranslatedText("signUp.gift")}
      </Styles.TitleH2>

      <Styles.Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder={getTranslatedText("signUp.placeholderName")}
        />
        {formik.touched.name && formik.errors.name ? (
          <Styles.FormikError>{formik.errors.name}</Styles.FormikError>
        ) : null}

        <Styles.StyledPhoneInput
          type="text"
          international
          name="phoneNumber"
          defaultCountry="UA"
          value={formik.values.phoneNumber}
          countryCallingCodeEditable={false}
          placeholder={getTranslatedText("signUp.placeholderPhone")}
          onChange={(value) => formik.setFieldValue("phoneNumber", value)}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <Styles.FormikError>{formik.errors.phoneNumber}</Styles.FormikError>
        ) : null}

        <Input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={getTranslatedText("signUp.placeholderEmail")}
        />
        {formik.touched.email && formik.errors.email ? (
          <Styles.FormikError>{formik.errors.email}</Styles.FormikError>
        ) : null}

        <Button type="submit" text={getTranslatedText("signUp.freeSignUp")} />

        <Styles.PrivacyPolicy>
          {getTranslatedText("signUp.agreeWithConditions")}

          <Styles.PrivacyLink target="_blank" href="#">
            {getTranslatedText("signUp.privacyPolicy")}
          </Styles.PrivacyLink>
        </Styles.PrivacyPolicy>
      </Styles.Form>
    </Styles.Wrapper>
  );
};

export { SignUp };
