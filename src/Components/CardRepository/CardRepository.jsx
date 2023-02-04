import React from "react";
import s from './CardRepository.module.css';
import CardList from "./Elements/CardList";

const CardRepository = () => {
    return <div className={s.CardRepository}>
        <h1>CardRepository</h1>
        <CardList/>
    </div>
}

export default CardRepository;
