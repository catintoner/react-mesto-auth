import React from "react";

function Login() {





  return (
    <form
      className="sign__container"
      name="login-form">
      <h3 className="sign__title">
        Вход
      </h3>

      <input
        className="sign__input"
        id="login"
        name="login"
        type="email"
        placeholder="Email"
        required
        autoComplete="off"
      />

      <input
        className="sign__input"
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        autoComplete="off"
      />

      <button
      className="sign__button-submit"
        type="submit">
          Войти
      </button>
    </form>
  )
}

export default Login;
