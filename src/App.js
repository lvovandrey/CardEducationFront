import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CardList apiUrl="http://localhost:5000/api/card" />

      </header>
    </div>
  );
}

class Card extends React.Component {

  constructor(props) {
      super(props);
      this.state = { data: props.card };
  }

  render() {
      return <div>
          <p><b>{this.state.data.name}</b></p>
          <a href={this.state.data.uri}>Link to image </a> 
      </div>;
  }
}


class CardList extends React.Component {

  constructor(props) {
      super(props);
      this.state = { cards: [] };
  }
  // загрузка данных
  loadData() {


      var xhr = new XMLHttpRequest();
      xhr.open("get", this.props.apiUrl, true);
      xhr.onload = function () {
          var data = JSON.parse(xhr.responseText);
          this.setState({ cards: data });
      }.bind(this);
      xhr.send();
  }
  componentDidMount() {
      this.loadData();
  }

  render() {
      return <div>
          <h2>Список смартфонов</h2>
          <div>
              {
                  this.state.cards.map(function (card) {

                      return <Card key={card.id} card={card}  />
                  })
              }
          </div>
      </div>;
  }
}





export default App;
