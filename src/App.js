import React, { Component } from 'react';
import monsters from './monsters.json';
import Wrapper from './components/wrapper/wrapper';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Scoreboard from './components/scoreboard/scoreboard';
import ImageCard from './components/imageCard/imageCard';
import GameOver from './components/gameover/gameover';

function randomMonster(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
    state = {
      msg: 'Click any monster to begin',
      score: 0,
      highScore: 0,
      monsters: monsters,
      selected: [],
      gameover: false,
      countdown: '',
    }
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

    shuffleMonsters = () => {
      let shuffled = randomMonster(monsters);
      this.setState({monsters: shuffled});
    }

    handleClick = (name) => {
      if (!this.state.gameover) {
        if (this.state.selected.indexOf(name) === -1) {
          this.increment();
          this.setState({selected: [...this.state.selected, name]});
        } else {
          this.setState({msg: 'Game Over!', gameover: true})
          this.reset();
          setTimeout(() => {
            this.setState({ countdown: 3 });
          }, 1000)
          setTimeout(() => {
            this.setState({ countdown: 2 });
          }, 2000)
          setTimeout(() => {
            this.setState({ countdown: 1 });
          }, 3000)
        }
      } else {
        this.setState({ 
          msg: 'Click any monster to begin', 
          selected: [],
          score: 0,
          gameover: false
        });
      }
    }

    increment = () => {
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        msg: 'You gained a point!'
      });
      if (newScore >= this.state.highScore) {
        this.setState({highScore: newScore});
      }
      if (newScore === 12) {
        this.setState({
          msg: "You've won!",
          selected: [],
          gameover: true
        });
      }
      this.shuffleMonsters();
    };

    reset = () => {
      setTimeout(() => {
        this.setState((prevState) => ({          
          msg: 'Click any monster to begin',           
          score: 0,           
          highScore: prevState.highScore,           
          selected: [],           
          gameover: false,           
          countdown: 3         
        }));    
        this.shuffleMonsters()
      }, 4000);
    }

render() {
  if (!this.state.gameover) {
    return (
        <Wrapper>
          <Navbar />
          <Header />
          <Scoreboard 
            msg={this.state.msg}
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <div className="container">  
          { 
            this.state.monsters.map(monster => (
              <ImageCard 
                key={monster.name}
                name={monster.name}
                img_url={monster.img_url}
                handleClick={this.handleClick}
              />
            ))
          }
          </div>
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <Navbar />
          <Header />
            <Scoreboard
              msg={this.state.msg}
              score={this.state.score}
              highScore={this.state.highScore}
            />
          <div className="container">
            <GameOver
              msg={this.props.msg}
              score={this.state.score}
              gameover={this.state.gameover}
              countdown={this.state.countdown}
              handleClick={this.handleClick}
            />
          </div>
        </Wrapper>
      )
    }
  }  
}
 
export default App;
