import React, { createContext } from 'react';

const LoginContext = createContext({
    onLogin: (obj) => { },
    onLogout: (obj) => { },
    isLogin: false,
    userData: {},
    error: {}
});

export default LoginContext;