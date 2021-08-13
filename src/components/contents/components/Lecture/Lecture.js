import React, { Component } from 'react';
import Sidebar from '../../../shared/components/side-bar/Sidebar';
import './Lecture.css';

class Lecture extends Component {
  render() {
    return (
      <div className="lecture-section">
          <Sidebar/>
          <h1>Lecture</h1>
      </div>
    );
  }
}

export default Lecture;