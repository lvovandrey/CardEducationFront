import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App app_wrapper">
        <Header />
        <Navbar />
        <Main />

      </div>
    </BrowserRouter>
  );
}



export default App;
