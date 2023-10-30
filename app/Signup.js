import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './page.module.css';

const Signup = ({ onSignup, onToggleForm, errors }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSignup(data);
  };

  return (
    <form className={styles.memberSystem} onSubmit={handleSubmit(onSubmit)}>
      <p>註冊會員</p>
      {/* <label htmlFor="nameInput"></label>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <input {...field} type="text" id="nameInput" placeholder="Name" />
        )}
      />
      {errors.name && (
        <p className={styles.errorMessage}>{errors.name.message}</p>
      )} */}

      <label htmlFor="regEmailInput"></label>
      <Controller
        name="regEmail"
        control={control}
        defaultValue=""
        rules={{ required: "E-mail is required" }}
        render={({ field }) => (
          <input
            {...field}
            type="email"
            id="regEmailInput"
            placeholder="E-mail"
          />
        )}
      />
      {errors.regEmail && (
        <p className={styles.errorMessage}>{errors.regEmail.message}</p>
      )}

      <label htmlFor="regPasswordInput"></label>
      <Controller
        name="regPassword"
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <input
            {...field}
            type="password"
            id="regPasswordInput"
            placeholder="Password"
          />
        )}
      />
      {errors.regPassword && (
        <p className={styles.errorMessage}>{errors.regPassword.message}</p>
      )}

      <button className={styles.button85} type="submit">
        註冊
      </button>
      <button className={styles.button85} onClick={onToggleForm}>
        切换到登入
      </button>
    </form>
  );
};

export default Signup;
