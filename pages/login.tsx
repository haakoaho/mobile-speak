"use client";

import { useState, FormEvent } from "react";
import styles from "../styles/login.module.scss";
import { useRouter } from "next/router";
import { useBackendUrl } from "../hooks/useBackendUrl";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const backendUrl = useBackendUrl();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password } = formData;
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await fetch(`${backendUrl}/api/users/userInfo`, {
        method: "GET",
        headers: {
          Authorization: basicAuth,
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "y",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        router.push("/");
        // Handle the response data here, e.g., store session token
      } else {
        console.error("Failed to fetch agenda");
        // Handle error scenario
      }
    } catch (error) {
      console.error("Failed to fetch agenda:", error);
      // Handle network or other errors
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button className={styles.loginButton} type="submit">
          Login
        </button>

        <a href="/register" className={styles.label}>
          New user? Click below register
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
