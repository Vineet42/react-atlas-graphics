import React, { Component } from 'react';
import KickedRotor from './graphics/AnimatedGraphics/KickedRotor/KickedRotor'
import TestAnimation from './graphics/InteractiveGraphics/TestAnimation/TestAnimation'
import BandStructure from './graphics/InteractiveGraphics/BandStructure/BandStructure'
import GraphContainer from './components/GraphContainer/GraphContainer'
import Naviibar from './components/Naviibar'
import semStyles from './semantic/dist/semantic.min.css';
import styles from './app.css'
import marked from 'marked';

class App extends Component {
    
     state = {
    renderMsg: false,
    markdown: null     
  }
     

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }
  
  componentWillMount() {
  const contentPath = require("./content.md");

  fetch(contentPath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
  }
  
  render() {
      
    const { markdown } = this.state;
      
      
    return (
      <div className={ styles.App }>  
        <div class="ui grid">
        
                {/* markup body */}
        
            <div class="eleven wide column" style={{left: "1rem", paddingTop: "3rem"}}>
                <article dangerouslySetInnerHTML={{__html: markdown}}></article>
            </div>
        
            <div class="four wide column">
                <div class="ui massive right fixed vertical menu"  style={{right:"1rem", width: "inherit", paddingTop: "3rem"}}>
                      <a><GraphContainer /></a>
                      <a><TestAnimation /></a>
                      <a><KickedRotor /></a>
                      <a><BandStructure /></a>
                </div>
            </div>
        
        </div>
        
        <div><Naviibar /></div>

        
      </div>
    );
  }
}

export default App;




