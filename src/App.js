import React, { useState, useEffect } from 'react';
import Login from './page/Login';
import Main from './page/Main';
import './App.css';

const App = () => {
  // 로그인 상태를 localStorage에서 가져옵니다.
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    // 로그인 상태가 변경될 때마다 localStorage에 저장합니다.
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <Main onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;