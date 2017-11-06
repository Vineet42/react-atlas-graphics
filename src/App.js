import React, { Component } from 'react';
import KickedRotor from './graphics/AnimatedGraphics/KickedRotor/KickedRotor'
import TestAnimation from './graphics/InteractiveGraphics/TestAnimation/TestAnimation'
import BandStructure from './graphics/InteractiveGraphics/BandStructure/BandStructure'
//import Graphic from './components/Graphic/Graphic'
import GraphContainer from './components/GraphContainer/GraphContainer'
import FadeIn from 'react-fade-in'
import Typist from 'react-typist';

import styles from './App.module.sass'

class App extends Component {
    
     state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }
  
  render() {
    return (
      <div className={ styles.App }>  
                <div className= { styles.hdd }>
                    <div className= { styles.lmao }><FadeIn> <p><Typist onTypingDone={this.onHeaderTyped}>The Quantum Atlas Graphics Gallery</Typist></p></FadeIn></div>
                    <div className= { styles.header }><GraphContainer /></div>
                </div>
                <div className= { styles.hrr }><hr></hr></div>
                <div className= { styles.bodd }>
                    <div className={ styles.gallery }>
                        <div className={ styles.galleryGrid }>
                            <BandStructure />
                            <TestAnimation />
                            <KickedRotor />
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default App;




