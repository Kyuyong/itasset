import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Example API call (URL and parameters need to be adjusted based on i-net specs)
    const response = await fetch('https://i-net.skons.co.kr/MobileLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Additional headers as required by i-net
      },
      body: JSON.stringify({
        loginId: username,
        Pwd: password, // Ensure this is sent securely and as per i-net requirements
      }),
    });
    const data = await response.json();

    if (response.ok && data.loginResult === 'Success') { // Adjust based on actual API response structure
      onLogin(true);
    } else {
      setLoginError(true);
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
          <form onSubmit={handleLogin} className="contentWrap">
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
              <button className="bottomButton" type="submit">로그인 Test 중 </button>
            </div>
          </form>
        </div>

      </div>

    </div>

  );
};

export default Login;
