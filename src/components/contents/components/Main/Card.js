import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  render() {
    const {
      name, phone, id
    } = this.props.info;

    return (
      <div className="card-wrapper">
          <div className="card-header">
              <h2>contents</h2>
          </div>
          <div className="card-body">
              <p>{name}</p>
              <p>{phone}</p>
          </div>
      </div>
    );
  }
}

export default Card;