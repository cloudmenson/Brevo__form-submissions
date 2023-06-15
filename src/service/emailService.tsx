import axios from "axios";

import { API_KEY } from "config/keys";

import { ISendEmail } from "./types";

const sendEmail = async ({ name, email, phoneNumber }: ISendEmail) => {
  try {
    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: { name: `${name}`, email: "hrytsenko.danylo@gmail.com" },
        to: [{ email: "cloudmenson9@gmail.com" }],
        subject: "New Contact Form Submission",
        textContent: ` Email: ${email}\nPhone Number: ${phoneNumber}`,
      },
      {
        headers: {
          "api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email sent:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { sendEmail };
