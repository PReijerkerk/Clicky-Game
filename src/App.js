import React, { Component } from 'react';
import monsters from './monsters.json';
import Wrapper from './components/wrapper/wrapper';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Scoreboard from './components/scoreboard/scoreboard';
import ImageCard from './components/imageCard/imageCard';
import GameOver from './components/gameover/gameover';

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


render() {
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
                key={monster.id}
                id={monster.id}
                img_url={monster.img_url}
                
              />
            ))
          };
          </div>
        </Wrapper>
      )
    }  
}
 


    


export default App;
