import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // 로그인 정보를 변수로 선언
  const validUsername = 'admin';
  const validPassword = '1234';


  const handleSubmit = (event) => {
    event.preventDefault();
    // 변수를 사용하여 로그인 검증
    if (username === validUsername && password === validPassword) {
      onLogin(true); // 로그인 성공
    } else {
      setLoginError(true); // 로그인 실패, 에러 메시지 표시
    }
  };

  return (
    <div className="main-container">

      <div className="login-container" >

        <div className="login-leftside">
          <div className="login-logoname">IT Asset</div>
        </div>

        <div className="login-rightside">
          <div className="gap-60" /><div className="gap-60" />
          <div className="titleWrap">Welcome to IT Asset!!</div>
          <form onSubmit={handleSubmit} className="contentWrap">
            <div className="inputTitle">사번</div>
            <div className="inputWrap">
              <input
                type="text"
                placeholder="N+사번을 입력하세요."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputTitle" >비밀번호</div>
            <div className="inputWrap">
              <input
                type="password"
                placeholder="i-net 비밀번호를 입력하세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {loginError && <div className="errorMessageWrap">로그인 정보가 올바르지 않습니다.</div>}
            <div>
              <button className="bottomButton" type="submit">로그인</button>
            </div>
          </form>
        </div>

      </div>

    </div>

  );
};

export default Login;
