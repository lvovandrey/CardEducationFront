import React from "react";
import s from './CardList.module.css';
import Card from "./Card";
import axios from "axios";

const CardList = () => {

    const [cards, setCards] = React.useState(" ");
    const apiUrl = 'http://localhost:5000/api/card';


    console.log(cards);

    if (!cards || !cards.cardsArray || cards.cardsArray.length === 0) {

        axios.get(apiUrl)
            .then((cards) => {
                const allCards = cards.data;
                setCards({ cardsArray: allCards });
            });
        return <p>No cards, sorry</p>;
    }

    return (
        <ul>
            <h2>Cards:</h2>
            {cards.cardsArray.map((card) => {
                return (
                    <Card cardInfo={card} />
                );
            })}
        </ul>);
}

export default CardList;
