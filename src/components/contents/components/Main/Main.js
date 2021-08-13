import React, { Component } from 'react';
import Card from './Card';
import Carousel from './Carousel';
import './Main.css';
import axios from "axios";
import { withRouter } from "react-router-dom";

class Main extends Component {
  static defaultProps = {
    data: []
  }
    state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
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