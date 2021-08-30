import React, { Component } from 'react';
import './Footer.css';
require('dotenv').config();

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="footer-upper">
            <img className="logo-img" src={`api/images/logo.png`} alt="logo_image"></img>
          </div>
          <div className="footer-under">
            <span className="footer-location">(우)32132 대전광역시 유성구 궁동 99 충남대학교 / 대표전화 : 042-000-0000</span>
          </div>
      </div>
    );
  }
}

export default Footer;