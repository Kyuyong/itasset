import React, { useState } from 'react';
import axios from 'axios';

// loginToInet 함수 수정
const loginToInet = async (employeeId, password, setLoginSuccess) => {
  // 비밀번호를 BASE64로 인코딩
  const encodedPassword = window.btoa(password);

  // API 엔드포인트와 쿼리 파라미터
  const endpoint = `https://i-net.skons.co.kr/MobileLogin?LoginId=${employeeId}&Pwd=${encodedPassword}`;

  try {
    // API 호출
    const response = await axios.get(endpoint);
    console.log('API 호출 결과:', response.data);
    // 로그인 성공 시, 로그인 상태를 true로 변경하는 함수 호출
    setLoginSuccess(true);
  } catch (error) {
    console.error('API 호출 에러:', error);
    // 로그인 실패 시, 필요한 에러 처리 로직
    setLoginSuccess(false);
  }
};

// App 컴포넌트
const Login = () => {
  // 로그인 상태를 관리하는 state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 사번과 비밀번호로 로그인 함수 호출
    // setIsLoggedIn 함수를 loginToInet 함수에 인자로 전달
    loginToInet('1102216', 'rbdyd0209!', setIsLoggedIn);
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인</button>
      {isLoggedIn ? <p>로그인이 성공했습니다!</p> : <p>로그인해주세요.</p>}
    </div>
  );
};

export default Login;
