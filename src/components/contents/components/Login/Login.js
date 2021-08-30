import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../actions/auth";
import { withRouter } from "react-router-dom";
import './Login.css';

const Login = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const { show, handleShow } = props;

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
          id: id,
          password: password,
        };
        dispatch(loginUser(body))
          .then((res) => {
            if (res.payload.success) {
              props.history.push("/");
              {handleShow()};
            } else {
              alert('로그인에 실패하였습니다.');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <>
            <Modal show={show} onHide={handleShow} animation={false}>
                <Modal.Header>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td><input value={id} onChange={onIdHandler} /></td>
                                </tr>
                                <tr>
                                    <th>PASSWORD</th>
                                    <td><input type="password" value={password} onChange={onPasswordHanlder}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="dark-blue-button" onClick={onSubmitHandler}>로그인</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal><Modal></Modal>
        </>
    )
}

export default withRouter(Login);