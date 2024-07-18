"use server";

import { z } from "zod";

const EmailSchema = z.string().email({ message: "formSubmitWrongEmail" });

export const subscribeHandler = async (email: string) => {
  const emailValidation = EmailSchema.safeParse(email);

  if (!emailValidation.success) {
    return { error: "formSubmitWrongEmail" };
  }

  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const API_SERVER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
    body: JSON.stringify({
      email_address: emailValidation.data,
      status: "subscribed",
    }),
  };

  try {
    const response = await fetch(url, options).then((res) => res.json());
    console.log("✅ subscribeHandler response", response);

    if (response.status == 200 || response.status === "subscribed") {
      return { message: "formSubmitSuccess" } as const;
    }

    if (response.status == 400) {
      return { error: "formSubmit" + response.title.replace(/\s/g, "") };
    }

    return { error: response.detail as string };
  } catch (error) {
    console.log("❌ subscribeHandler error", error);
  }
};
