import React, { useState, useContext, createContext } from 'react';

const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  // 判斷有沒有登入的狀態
  const { isLogin, setIsLogin } = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
