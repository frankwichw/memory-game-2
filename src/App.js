import React from 'react';
import MemoryGame from './pages/MemoryGame';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="memory-header">
        <h1 className="app-title">Bug Finder</h1>
      </header>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MemoryGame} />
          </Switch>
        </div>
      </Router> 
      </div>
  );
}

export default App;
