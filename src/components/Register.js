import React from "react";

import { Link, withRouter } from "react-router-dom";

function Register(props) {

  const [newEmail, setNewEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  function handleEmailChange(evt) {
    setNewEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setNewPassword(evt.target.value);
  }

  function handleDataSubmit(evt) {
    evt.preventDefault();
    props.auth.registration(newEmail, newPassword)
      .then((res) => {
        if (res) {
          props.history.push('/sign-in');
        }
      })
      .catch((err) => {
        props.autoNotifiedRegistration();
        console.log(err);
      })
  }

  return (
    <>
      <form
        className="sign__container"
        name="login-form"
        onSubmit={handleDataSubmit}
      >
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
          value={newEmail}
          onChange={handleEmailChange}
        />

        <input
          className="sign__input"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
          autoComplete="off"
          value={newPassword}
          onChange={handlePasswordChange}
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


export default withRouter(Register);
