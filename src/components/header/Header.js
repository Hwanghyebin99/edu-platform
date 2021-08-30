import React, { useState }  from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from '../contents/components/Login/Login';
import { useSelector } from 'react-redux';
import { logoutUser } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const Header = (props) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(show ? false : true);
    };

    const success = useSelector(state => {
      console.log(state);
      return state.auth.login ? state.auth.login : false;
    });

    const onSubmitHandler = (e) => {
      e.preventDefault();
      dispatch(logoutUser())
        .then((res) => {
          if (res.payload.success) {
            props.history.push("/");
          } else {
            alert('다시 시도해주세요.');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const loginContainer = (
      <>
        <button onClick={handleShow} className="dark-blue-button">로그인</button>
        <button className="dark-blue-button"><Link to='/join' className="join-button">회원가입</Link></button>
      </>
    );

    const logoutContainer = (
      <>
        <button onClick={onSubmitHandler} className="dark-blue-button">로그아웃</button>
      </>
    );
    return (
      <>
        <div className="navbar-container">
          <h1><Link to="/" className="main-logo">EDU PLATFORM</Link></h1>
          <Navigation />
          <div className="button-wrapper">
            { success ? logoutContainer : loginContainer }
          </div>
        </div>
        <Login show={show} handleShow={handleShow}/>
      </>
    );

}

export default withRouter(Header);