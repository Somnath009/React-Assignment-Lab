import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [jwtToken, setJwtToken] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check stored credentials on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('jwt_auth_token') || sessionStorage.getItem('jwt_auth_token');
    const savedUser = localStorage.getItem('auth_user') || sessionStorage.getItem('auth_user');

    if (savedToken && savedUser) {
      try {
        setJwtToken(savedToken);
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved auth state', e);
      }
    }
    setLoading(false);
  }, []);

  // Helper to simulate JWT Token creation
  const generateMockJWT = (username) => {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(
      JSON.stringify({
        sub: username,
        role: 'Administrator',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 86400
      })
    );
    const signature = btoa('react_lab_secret_key_sig_2026');
    return `${header}.${payload}.${signature}`;
  };

  const login = (username, password, remember) => {
    const token = generateMockJWT(username);
    const userData = { username, role: 'Administrator', loginTime: new Date().toLocaleTimeString() };

    setJwtToken(token);
    setUser(userData);
    setRememberMe(remember);

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('jwt_auth_token', token);
    storage.setItem('auth_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setJwtToken(null);
    localStorage.removeItem('jwt_auth_token');
    localStorage.removeItem('auth_user');
    sessionStorage.removeItem('jwt_auth_token');
    sessionStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        jwtToken,
        rememberMe,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
