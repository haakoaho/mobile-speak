import { useState, FormEvent } from "react";
import styles from "../styles/login.module.scss";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password } = formData;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (result.ok) {
        router.push("/");
      } else if (result.status === 401) {
        setErrorMessage("Wrong username and/or password");
      } else {
        setErrorMessage("A technical error occured. Let the developer know what you did");
      }
    } catch (error) {
      setErrorMessage("Something seems to be wrong with the network")
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email:
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
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <button className={styles.loginButton} type="submit">
          Login
        </button>
        <a href="/register" className={styles.label}>
          New user? Click below to register
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
