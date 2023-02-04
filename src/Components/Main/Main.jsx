import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../AboutPage/About";
import CardRepository from "../CardRepository/CardRepository";
import Home from "../HomePage/Home";
import s from './Main.module.css';


const Main = () => {
    return <main className={s.main}>
       

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/edit_cards' element={<CardRepository/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
    </main>
}

export default Main;