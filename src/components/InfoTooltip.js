import React from "react";

import Accept from "../images/Accept.svg";
import NotAccept from "../images/Not_accept.svg";

function InfoTooltip(props) {

  React.useEffect(() => {
    if (props.isOpen) {
      function closeOnEsc(evt) {
        if (evt.key === "Escape") {
          props.onClose();
        }
      }

      document.addEventListener('keydown', closeOnEsc);

      return () => {
        document.removeEventListener('keydown', closeOnEsc);
      }
    }
  }, [props.isOpen]);

  return (
    <section
      className={`popup popup_type_${props.name} ${props.isOpen ? ("popup_opened") : ""}`}
    >
      <button
        className="popup__exit"
        type="button"
        onClick={props.onClose}>
      </button>
      <div
        className="popup__container">
        <img
          className="popup__registration-img"
          src={Accept}
          alt="Регистрация"
        />
        <h3
          className="popup__title popup__title_type_registration">
            Вы успешно зарегистрировались!
          </h3>
      </div>
    </section>
  )
}

export default InfoTooltip;
