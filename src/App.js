import React, { Component } from "react";
import "./UI/App.css";
import OverModal from "./Components/GameOverModal";
import Circle from "./Components/Circle";

import click from "./Assets/22-cal.mp3";
import endSound from "./Assets/retro-style-track.mp3";
import startSound from "./Assets/sinister-lol.mp3";

const randomZombie = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class App extends Component {
  state = {
    score: 0,
    circles: [1, 2, 3, 4],
    pace: 1500,
    gameOn: false,
    gameOver: false,
    current: undefined,
    startButtonActive: true,
    endButtonActive: false,
    rounds: 0,
  };

  toggleButtons = () => {
    this.setState({ startButtonActive: !this.state.startButtonActive });
    this.setState({ endButtonActive: !this.state.endButtonActive });
  };

  clickHandler = (i) => {
    let clickSound = new Audio(click);
    clickSound.play();

    if (this.state.current !== i) {
      return this.stopHandler();
    }

    this.setState({
      score: this.state.score + 100,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 3) {
      this.stopHandler();
      return;
    }

    let nextActive;

    do {
      nextActive = randomZombie(0, this.state.circles.length - 1);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });
    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startHandler = () => {
    let gameStartSound = new Audio(startSound);
    gameStartSound.play();
    this.toggleButtons();
    this.nextCircle();
    this.setState({ gameOn: !this.state.gameOn });
  };

  stopHandler = () => {
    let gameOverSound = new Audio(endSound);
    gameOverSound.play();
    this.toggleButtons();
    clearTimeout(this.timer);
    this.setState({ gameOver: true });
  };

  closeHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="game_wrapper">
        <h1>Zombie Slayer</h1>
        <h3>
          Your score is : <span id="score">{this.state.score}</span>
        </h3>
        <div className="circles">
          {this.state.circles.map((circle) => (
            <Circle
              key={circle}
              id={circle + 1}
              gameOn={this.state.gameOn}
              click={() => this.clickHandler(circle)}
              active={this.state.current === circle}
            />
          ))}
        </div>
        {this.state.startButtonActive && (
          <button onClick={this.startHandler}>Start Game</button>
        )}
        {this.state.endButtonActive && (
          <button onClick={this.stopHandler}>End Game</button>
        )}

        {this.state.gameOver && (
          <OverModal score={this.state.score} close={this.closeHandler} />
        )}
      </div>
    );
  }
}

export default App;
