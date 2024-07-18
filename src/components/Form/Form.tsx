"use client";

import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { Button } from "../Button";
import { Text } from "../Text";

import styles from "./Form.module.scss";
import { subscribeHandler } from "./FormAction";

export function Form() {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await subscribeHandler(email);

      if (response?.message) {
        setStatus("success");
        toast("✅ " + t(response.message));
      } else if (response?.error) {
        setStatus("error");
        toast("❌ " + t(response.error as any));
      }

      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubscribe}>
      <div className={styles.textCardFormContainer}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status == "loading"}
          required
        />
        <Button type="submit" disabled={status == "loading"}>
          <Text>{t("button2")}</Text>
        </Button>
      </div>
    </form>
  );
}
