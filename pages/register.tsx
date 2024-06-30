"use client";

import { useState, FormEvent } from "react";
import styles from "../styles/register.module.scss";
import { useRouter } from "next/router";
import { backendUrl } from "../util/getBackendUrl";

type FormData = {
  name: string;
  password: string;
  password2: string;
  email: string;
  phoneNumber: string;
  acceptedTerms: boolean;
  gdprConsent: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
    password2: "",
    email: "",
    phoneNumber: "",
    acceptedTerms: false,
    gdprConsent: "", // Initialize as empty to ensure user makes a choice
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.acceptedTerms) {
      setError("You must accept the terms and conditions");
      return;
    }

    if (!formData.gdprConsent) {
      setError("You must provide consent for GDPR compliance");
      return;
    }

    setError("");
    try {
      const response = await fetch(`${backendUrl}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "y",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully");
        router.push("/signin");
      } else {
        console.error("Failed to register user");
        setError("Failed to register user");
      }
    } catch (error) {
      console.error("Failed to register user:", error);
      setError("Failed to register user");
    }
  };

  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter a Strong Password"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password2">Confirm Password:</label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={formData.password2}
            onChange={handleChange}
            required
            placeholder="Type the password again"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </div>
        <div className={styles.formCheckbox}>
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
          />
          <label>
            I accept the{" "}
            <a href="/terms" target="_blank">
              terms and conditions
            </a>
          </label>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gdprConsent"
              value="yes"
              checked={formData.gdprConsent === "yes"}
              onChange={handleChange}
              required
            />
            I consent to Oslo Toastmasters Club using pictures of my speeches in social media.
          </label>
          <label>
            <input
              type="radio"
              name="gdprConsent"
              value="no"
              checked={formData.gdprConsent === "no"}
              onChange={handleChange}
              required
            />
            I do not consent to Oslo Toastmasters Club using pictures of my speeches in social media.
          </label>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
