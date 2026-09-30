import React from 'react';
import { ShieldCheck, ShieldAlert, Check, X } from 'lucide-react';

export default function PasswordStrengthMeter({ password }) {
  if (!password) return null;

  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const score = [hasMinLength, hasUpper && hasLower, hasNumber, hasSpecial].filter(Boolean).length;

  let label = 'Weak';
  let className = 'strength-weak';
  let color = '#f43f5e';

  if (score === 2) {
    label = 'Fair';
    className = 'strength-fair';
    color = '#fbbf24';
  } else if (score === 3) {
    label = 'Good';
    className = 'strength-good';
    color = '#38bdf8';
  } else if (score === 4) {
    label = 'Strong / Excellent';
    className = 'strength-strong';
    color = '#34d399';
  }

  return (
    <div style={{ marginTop: '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
        <span style={{ color: '#94a3b8' }}>Password Strength:</span>
        <strong style={{ color }}>{label}</strong>
      </div>

      <div style={{ background: 'rgba(15, 23, 42, 0.6)', height: '6px', borderRadius: '9999px', overflow: 'hidden', marginTop: '0.35rem' }}>
        <div className={`a7-strength-bar ${className}`}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem', marginTop: '0.65rem', fontSize: '0.75rem' }}>
        <span style={{ color: hasMinLength ? '#34d399' : '#64748b', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
          {hasMinLength ? <Check size={12} /> : <X size={12} />} At least 8 characters
        </span>
        <span style={{ color: hasUpper && hasLower ? '#34d399' : '#64748b', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
          {hasUpper && hasLower ? <Check size={12} /> : <X size={12} />} Mixed case (A-z)
        </span>
        <span style={{ color: hasNumber ? '#34d399' : '#64748b', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
          {hasNumber ? <Check size={12} /> : <X size={12} />} Contains numbers (0-9)
        </span>
        <span style={{ color: hasSpecial ? '#34d399' : '#64748b', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
          {hasSpecial ? <Check size={12} /> : <X size={12} />} Special symbol (!@#$)
        </span>
      </div>
    </div>
  );
}
