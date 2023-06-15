import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { sendEmail } from "service/emailService";
import { Input } from "components/common/input/Input";
import { Button } from "components/common/button/Button";

import * as Styles from "./styles";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Введите имя и фамилию")
      .min(8, "Минимум 8 символов"),
    email: Yup.string()
      .required("Введите email")
      .email("Некорректный формат email"),
    phoneNumber: Yup.string().required("Введите номер телефона"),
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
        alert("Успешно отправлено");
        formik.resetForm();
      } catch (error) {
        alert("Ошибка при отправке. Пожалуйста, попробуйте еще раз");
      }
    },
  });

  return (
    <Styles.Wrapper>
      <Styles.TitleH2>
        Запишитесь&nbsp;
        <Styles.ColorSpan>бесплатно</Styles.ColorSpan>&nbsp; и получите подарок
      </Styles.TitleH2>

      <Styles.Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Ваше имя и фамилия"
        />
        {formik.touched.name && formik.errors.name ? (
          <Styles.FormikError>{formik.errors.name}</Styles.FormikError>
        ) : null}

        <Styles.StyledPhoneInput
          type="tel"
          international
          name="phoneNumber"
          defaultCountry="UA"
          placeholder="Ваш номер телефона"
          value={formik.values.phoneNumber}
          countryCallingCodeEditable={false}
          onChange={(value) => formik.setFieldValue("phoneNumber", value)}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <Styles.FormikError>{formik.errors.phoneNumber}</Styles.FormikError>
        ) : null}

        <Input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <Styles.FormikError>{formik.errors.email}</Styles.FormikError>
        ) : null}

        <Button text="Записаться бесплатно" type="submit" />

        <Styles.PrivacyPolicy>
          Нажимая на кнопку я соглашаюсь
          <Styles.PrivacyLink target="_blank" href="#">
            c политикой конфиденциальности
          </Styles.PrivacyLink>
        </Styles.PrivacyPolicy>
      </Styles.Form>
    </Styles.Wrapper>
  );
};

export { SignUp };
