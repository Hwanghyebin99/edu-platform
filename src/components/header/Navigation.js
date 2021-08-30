import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const Navigation = () =>{
    return (
      <ul>
          <li>
            <Link to="/" >Main</Link>
          </li>
          <li>
            <Link to="/lecture">Lecture</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
      </ul>
    );
}

export default withRouter(Navigation);