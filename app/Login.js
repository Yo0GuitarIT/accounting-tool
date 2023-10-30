import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./page.module.css";



const Login = ({ onLogin, onToggleForm, errors }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    onLogin(data);
  };

  return (
    <form className={styles.memberSystem} onSubmit={handleSubmit(onSubmit)}>
      <p>登入系統</p>

      <label htmlFor="emailInput"></label>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "E-mail is required" }}
        render={({ field }) => (
          <input {...field} type="email" id="emailInput" placeholder="E-mail" />
        )}
      />
      {errors.email && (
        <p className={styles.errorMessage}>{errors.email.message}</p>
      )}

      <label htmlFor="passwordInput"></label>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <input
            {...field}
            type="password"
            id="passwordInput"
            placeholder="Password"
          />
        )}
      />
      {errors.password && (
        <p className={styles.errorMessage}>{errors.password.message}</p>
      )}

      <button className={styles.button85} type="submit">
        登入
      </button>
      <button className={styles.button85} onClick={onToggleForm}>
        切换到註冊
      </button>
    </form>
  );
};

export default Login;
