const NUMBER_OF_CHARACTERS = /^.{1,129}@/;
const EMAIL_REG_EXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const NUMBER_REG_EXP = /^\+\d{1,4}\s?\d{10,16}$/;

const NO_SPACE = /^\S+$/;

export { NO_SPACE, EMAIL_REG_EXP, NUMBER_OF_CHARACTERS, NUMBER_REG_EXP };
