import React, { useState } from "react";

import { sendEmail } from "service/emailService";
import { Input } from "components/common/input/Input";
import { Button } from "components/common/button/Button";

import * as Styles from "./styles";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendEmail({ name, phoneNumber, email });
      alert("Успешно отправлено");
      setName("");
      setPhoneNumber("");
      setEmail("");
    } catch (error) {
      alert("Ошибка при отправке. Пожалуйста, попробуйте еще раз");
      console.log(error);
    }
  };

  return (
    <Styles.Wrapper>
      <Styles.TitleH2>
        Запишитесь&nbsp;
        <Styles.ColorSpan>бесплатно</Styles.ColorSpan>&nbsp; и получите подарок
      </Styles.TitleH2>

      <Styles.Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Ваше имя и фамилия"
          onChange={({ target }) => setName(target.value)}
        />

        <Styles.StyledPhoneInput
          type="tel"
          name="phone"
          international
          value={phoneNumber}
          defaultCountry="UA"
          onChange={handlePhoneChange}
          placeholder="Ваш номер телефона"
          countryCallingCodeEditable={false}
        />

        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Ваше email"
          onChange={({ target }) => setEmail(target.value)}
        />

        <Button text="Записаться бесплатно" type="submit" />

        <Styles.PrivacyPolicy>
          Нажимая на кнопку я соглашаюсь
          <Styles.PrivacyLink target="_blank" href="#">
            c политикой конфедициальности
          </Styles.PrivacyLink>
        </Styles.PrivacyPolicy>
      </Styles.Form>
    </Styles.Wrapper>
  );
};

export { SignUp };
