import React from 'react';
import Game from './Game';
import './App.css';

//App-Top level component implemented as React function component.

function App() {
    //This is called a function component, it only returns a block of html,
    // so try replacing /*HTML STUFF*/ with <h1>Hello World<h1/>, and it should show up on your browser, nice.
    //renders this component
  return (
    // you want App.js to run Game.js, so to run a component
    // So in order to have your App.js to run Game.js, you do
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
//also can add it before function.
