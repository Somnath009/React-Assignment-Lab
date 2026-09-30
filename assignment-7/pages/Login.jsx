import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { Lock, User, Key, CheckCircle, AlertCircle } from 'lucide-react';

export default function Login({ basePath = '' }) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('admin_demo');
  const [password, setPassword] = useState('SecurePass123!');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMessage('Username is required.');
      return;
    }
    if (!password) {
      setErrorMessage('Password is required.');
      return;
    }

    login(username, password, rememberMe);
    navigate(`${basePath}/dashboard`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '1.5rem' }}>
      <div className="a7-login-card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(56,189,248,0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <Lock size={28} />
          </div>
          <h2 className="a7-login-title">Authentication Portal</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Sign in with JWT Token Simulation & Session Persistence
          </p>
        </div>

        {errorMessage && (
          <div style={{ background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.3)', color: '#f43f5e', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.85rem', textAlign: 'center' }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="a1-form-group">
            <label className="a1-label">Username *</label>
            <div style={{ position: 'relative' }}>
              <User size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="a1-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Enter username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="a1-form-group">
            <label className="a1-label">Password *</label>
            <div style={{ position: 'relative' }}>
              <Key size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                className="a1-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Password Strength Meter */}
            <PasswordStrengthMeter password={password} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1.25rem 0' }}>
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ accentColor: '#38bdf8', width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <label htmlFor="remember" style={{ color: '#cbd5e1', fontSize: '0.9rem', cursor: 'pointer' }}>
              Remember User (Persist in LocalStorage)
            </label>
          </div>

          <button type="submit" className="a1-btn-submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <CheckCircle size={18} /> Sign In & Issue JWT
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
          Demo Credentials Pre-filled. Click Sign In to test Route Protection!
        </div>
      </div>
    </div>
  );
}
