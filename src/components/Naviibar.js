import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import FadeIn from 'react-fade-in';
import Typist from 'react-typist';

import styles from '../app.css';
export default class Naviibar extends Component {
  state = {
      isTop: true,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
      

  render() {
    const { activeItem } = this.state
      
    return (
    <div className={this.state.isTop ? 'ui fixed inverted menu' : 'ui fixed menu'} >
    <div class="ui container">
      <a href="#" class="header item">
        <div><FadeIn> <p><Typist onTypingDone={this.onHeaderTyped}  cursor={{ hideWhenDone: true }}>Quantum Atlas</Typist></p></FadeIn></div>
      </a>
      <a href="#" class="item">Home</a>
      <div class="ui simple dropdown item">
        Materials <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item" href="#">Conductor</a>
          <a class="item" href="#">Insulator</a>
          <div class="divider"></div>
          <div class="header">Big Picture</div>
          <div class="item">
            <i class="dropdown icon"></i>
            Electricity
            <div class="menu">
              <a class="item" href="#">Electrons</a>
              <a class="item" href="#">Protons</a>
            </div>
          </div>
          <a class="item" href="#">James Maxwell</a>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

