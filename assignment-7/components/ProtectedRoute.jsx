import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock } from 'lucide-react';

export default function ProtectedRoute({ children, basePath = '' }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#94a3b8' }}>
        Verifying Authentication Session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={`${basePath}/login`} replace />;
  }

  return children;
}
