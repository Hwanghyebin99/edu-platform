import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  static defaultProps = {
    info: {
      title: 'React Native',
      imgSrc: '',
      alt: '',
      description: '',
      id: 0
    }
  }
  render() {
    const {
      title, imgSrc, alt, description, id
    } = this.props.info;

    return (
      <div className="card-wrapper">
          <div className="card-header">
              <h2>contents</h2>
          </div>
          <div className="card-body">
              <div className="image-wrapper">
                <img src={imgSrc} alt={alt}></img>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
          </div>
      </div>
    );
  }
}

export default Card;