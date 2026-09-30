import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import ProtectedDashboard from './pages/ProtectedDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './styles.css';

export default function Assignment7App({ basePath = '/assignment-7' }) {
  return (
    <AuthProvider>
      <div className="a7-container">
        <div style={{ padding: '1.5rem 2rem 0 2rem' }}>
          <Routes>
            <Route path="/" element={<Navigate to={`${basePath}/login`} replace />} />
            <Route path="/login" element={<Login basePath={basePath} />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute basePath={basePath}>
                  <ProtectedDashboard basePath={basePath} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}
