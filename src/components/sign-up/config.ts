import * as Yup from "yup";

import { getTranslatedText } from "components/local/getTranslatedText";
import {
  NO_SPACE,
  EMAIL_REG_EXP,
  NUMBER_REG_EXP,
  NUMBER_OF_CHARACTERS,
} from "utils/regExp";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required(getTranslatedText("errors.requiredName"))
    .min(8, getTranslatedText("errors.minEightSymbols")),
  email: Yup.string()
    .required(getTranslatedText("errors.requiredEmail"))
    .matches(EMAIL_REG_EXP, getTranslatedText("errors.invalidEmailFormat"))
    .matches(NUMBER_OF_CHARACTERS, getTranslatedText("errors.max129"))
    .matches(NO_SPACE, getTranslatedText("errors.noSpace"))
    .default(() => ""),
  phoneNumber: Yup.string()
    .required(getTranslatedText("errors.requiredPhoneNumber"))
    .matches(
      NUMBER_REG_EXP,
      getTranslatedText("errors.invalidPhoneNumberFormat")
    ),
});
