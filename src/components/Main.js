import React from "react";

import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onTrashClick,
  cards }) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватарка" />
          <button className="profile__avatar-button"
            type="button"
            onClick={onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">
            {currentUser.name}
          </h1>
          <button className="profile__redaction"
            type="button"
            onClick={onEditProfile}>
          </button>
          <p className="profile__about">
            {currentUser.about}
          </p>
        </div>
        <button className="profile__add-button"
          type="button"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              cardId={card._id}
              ownerId={card.owner._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onTrashClick}
            />
          )
        })}
      </section>
    </main>
  );
}

export default Main;
