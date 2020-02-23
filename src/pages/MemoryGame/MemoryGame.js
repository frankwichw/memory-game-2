import React, { Component } from "react";
import MemoryTile from '../../components/memory-tile/MemoryTile';
import './MemoryGame.scss';

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const bugs = [
      'cicada',
      'lovebug',
      'cockroach',
      'butterfly',
      'junebug',
      'silverfish',
      'moth',
      'stag beetle',
      'cicada',
      'lovebug',
      'cockroach',
      'butterfly',
      'junebug',
      'silverfish',
      'moth',
      'stag beetle'
    ];

    return (
      <div className="memory-app-wrapper">
        <section className="description">
          <h1>Find the matching bugs!</h1>
          <p>
            <code>find the bugs</code>
          </p>
        </section>
        <section className="difficulty">
          <h1>Set your difficulty level</h1>
        </section>
        <section className="bug-game">
          {bugs.map(bug => (
            <MemoryTile 
              bug={bug}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default MemoryGame;