import React from 'react';
import ReactDOM from 'react-dom';
import SearchPoke from "./App";

class Main extends React.Component {
  render() {
    return (
      
      <div className="container">
                {/* <div className = "Nav">
            <nav>
            <ul>
                <li><a href="#">Pokedex</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div> */}
        <h1 className="title">FIND YO POKEMON</h1>
        <SearchPoke/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

