// import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { sendEmail } from "service/emailService";
import { Input, Button } from "components";
import { getTranslatedText } from "components/local/getTranslatedText";

import * as Styles from "./styles";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(getTranslatedText("errors.requiredName"))
      .min(8, getTranslatedText("errors.minEightSymbols")),
    email: Yup.string().required(getTranslatedText("errors.requiredEmail")),
    // .email("Некорректный формат email"),
    phoneNumber: Yup.string().required(
      getTranslatedText("errors.requiredPhoneNumber")
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await sendEmail(values);
        alert(getTranslatedText("signUp.successAlert"));
        formik.resetForm();
      } catch (error) {
        alert(getTranslatedText("signUp.poorAlert"));
      }
    },
  });

  return (
    <Styles.Wrapper>
      <Styles.TitleH2>
        {getTranslatedText("signUp.signUpTitle")}&nbsp;
        <Styles.ColorSpan>{getTranslatedText("signUp.free")}</Styles.ColorSpan>
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
          type="tel"
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
          type="email"
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
