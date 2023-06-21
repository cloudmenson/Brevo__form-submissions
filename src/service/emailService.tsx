import axios from "axios";

import { ISendEmail } from "./types";

const sendEmail = async ({ name, email, phoneNumber }: ISendEmail) => {
  try {
    await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: { name: `${name}`, email: "hrytsenko.danylo@gmail.com" },
        to: [{ email: "designer.web.studio.rgb@gmail.com" }],
        subject: "New Contact Form Submission",
        textContent: ` Email: ${email}\nPhone Number: ${phoneNumber}`,
      },
      {
        headers: {
          "api-key": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { sendEmail };
