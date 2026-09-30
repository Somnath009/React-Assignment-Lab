import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Assignment6App from '../../assignment-6/Assignment6App';
import { ShieldCheck, LogOut, Key, UserCheck, HardDrive } from 'lucide-react';

export default function ProtectedDashboard({ basePath = '' }) {
  const { user, jwtToken, logout, rememberMe } = useAuth();
  const [showTokenDetails, setShowTokenDetails] = useState(false);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={24} color="#34d399" />
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0, color: '#f8fafc' }}>
                Protected User Session Dashboard
              </h2>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
              Authenticated as: <strong style={{ color: '#38bdf8' }}>{user?.username}</strong> ({user?.role}) | Logged in at {user?.loginTime}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <HardDrive size={14} /> Storage: {rememberMe ? 'LocalStorage (Persistent)' : 'SessionStorage'}
            </span>

            <button
              onClick={logout}
              style={{
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                color: '#f43f5e',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* JWT Token View Toggle */}
        <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
          <button
            onClick={() => setShowTokenDetails(!showTokenDetails)}
            style={{ background: 'none', border: 'none', color: '#38bdf8', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <Key size={14} /> {showTokenDetails ? 'Hide Simulated JWT Bearer Token' : 'Inspect Simulated JWT Bearer Token'}
          </button>

          {showTokenDetails && (
            <div className="a7-jwt-box">
              <div style={{ fontWeight: '700', marginBottom: '0.4rem', color: '#cbd5e1' }}>Simulated JWT Auth Token:</div>
              <div>{jwtToken}</div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                Header: HS256 | Payload: sub="{user?.username}", role="{user?.role}", exp=24h
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Embedded Protected Task Manager from Assignment 6 */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1rem' }}>
        Protected Task Management Module
      </h3>
      <Assignment6App basePath={`${basePath}/dashboard`} />
    </div>
  );
}
