import React from "react";
import s from './Card.module.css';

const Card = (props)=>{
    return (
        <li key={props.cardInfo.id} >
            <span className='repo-text'>{props.cardInfo.id} </span>
            <span> --- </span>
            <span className='repo-text'>{props.cardInfo.name} </span>
            <img src={props.cardInfo.uri} alt={props.cardInfo.name} width='100' height='100' />
        </li>
    );
}

export default Card;
