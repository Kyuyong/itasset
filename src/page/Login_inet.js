import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  //재로그인 로직을 위한 네비게이터

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const logoutTimerRef = useRef();  // 자동 로그아웃 타이머 로직
  const navigate = useNavigate(); //재로그인 로직을 위한 네비게이터


  const handleLogin = async (e) => {
    e.preventDefault();
    const encodedPassword = btoa(password); // 비밀번호를 BASE64로 인코딩합니다.

    try {
      const response = await fetch(`https://i-net.skons.co.kr/MobileLogin?LoginId=${username}&Pwd=${encodedPassword}`);
      const data = await response.json();


      // 응답 결과에 따라 처리합니다.
      if (data.loginResult === 'CHKPWD000') {
        clearTimeout(logoutTimerRef.current); // 기존 타이머 클리어
        onLogin(true);
        navigate('/'); // 로그인 성공 시 Main 페이지로 리디렉션합니다.
        // 로그인 성공 시, 30분 후 자동 로그아웃 타이머 설정
        logoutTimerRef.current = setTimeout(() => {  // 자동 로그아웃 타이머 로직
          handleLogout();
        }, 1800000); // 30 minutes  1800000
      } else {
        onLogin(false);
        switch (data.loginResult) {
          case 'CHKPWD100':
            setLoginError('사번 오류입니다.');
            break;
          case 'CHKPWD400':
            setLoginError('비밀번호 오류입니다.');
            break;
          case 'CHKPWD777':
            setLoginError('필요한 파라미터가 부족합니다.');
            break;
          case 'CHKPWDexp':
          case 'CHKPWDexpLocal':
            setLoginError('시스템 오류가 발생했습니다.');
            break;
          default:
            setLoginError('알 수 없는 오류가 발생했습니다.');
        }
      }
    } catch (error) {
      setLoginError('로그인 요청 중 오류가 발생했습니다.');
    }
  };


  // 로그아웃 처리
  const handleLogout = () => {
    onLogin(false);
    clearTimeout(logoutTimerRef.current); // 타이머 초기화
    navigate('/'); // 로그아웃 시 로그인 페이지로 리디렉션
  };

  // 컴포넌트 언마운트 시 타이머 클리어
  useEffect(() => {
    const timer = logoutTimerRef.current;
    return () => clearTimeout(timer);
  }, []);


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
            {loginError && <div className="errorMessageWrap">{loginError}</div>}
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
