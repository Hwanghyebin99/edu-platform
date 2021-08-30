import React, { Component } from 'react';
import Card from './Card';
import Carousel from './Carousel';
import './Main.css';
import developImage from '../../../../assets/images/software-developer.jpg';
import codeImage from '../../../../assets/images/code.jpg';
import dockerImage from '../../../../assets/images/docker-logo-1024x597.png';
import { withRouter } from "react-router-dom";

class Main extends Component {
  static defaultProps = {
    data: []
  }
    state = {
    information: [
      {
        id: 0,
        title: 'React JS',
        imgSrc: developImage,
        alt: 'developer image',
        description: '한달만에 배우는 리액트'
      },
      {
        id: 1,
        title: 'Express',
        imgSrc: codeImage,
        alt: 'code image',
        description: '[Node.js]서버 쉽게 구축하기'
      },
      {
        id: 1,
        title: 'Docker',
        imgSrc: dockerImage,
        alt: 'docker image',
        description: 'Docker는 무엇일까'
      }
    ]
  }
  render() {
    const { data } = this.props;
    const list = this.state.information.map(
      info => (<Card key={info.id} info={info}/>)
    );
    return (
      <div className="main-section">
          <Carousel/>
          <div className="card-container">
            {list}
          </div>
      </div>
    );
  }
}

export default withRouter(Main);