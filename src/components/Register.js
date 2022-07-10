import React from "react";

import { Link } from "react-router-dom";

function Register() {



  return (
    <>
      <form
        className="sign__container"
        name="login-form">
        <h3 className="sign__title">
          Регистрация
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
          Зарегистрироваться
        </button>
      </form>
      <p
        className="sign__caption">
        Уже зарегистрированы?
        <Link
          to="/sign-in"
          className="sign__link"
        > Войти</Link>
      </p>
    </>
  )
}


export default Register;
