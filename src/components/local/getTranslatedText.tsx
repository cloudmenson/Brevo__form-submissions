import ru from "./ru";

interface Translations {
  [lang: string]: Record<string, Record<string, string>>;
}

const translations: Translations = { ru };

const getTranslatedText = (key: string, lang: string = "ru") => {
  const arrayKeys = key.split(".");
  const [keys, value] = arrayKeys;
  const currentTranslation = translations[lang];

  return currentTranslation[keys][value];
};

export { getTranslatedText };
