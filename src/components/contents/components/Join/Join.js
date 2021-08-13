import React, { Component } from 'react';

const Join = () => {
  return (
    <div className="main-section">
      <h2>회원가입</h2>
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td><input></input></td>
          </tr>
          <tr>
            <th>아이디</th>
            <td><input></input></td>
          </tr>
          <tr>
            <th>패스워드</th>
            <td><input></input></td>
          </tr>
          <tr>
            <th>패스워드 확인</th>
            <td><input></input></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Join;