import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

export default function EmployeeModal({ isOpen, onClose, onSave, editingEmployee }) {
  const [formData, setFormData] = useState({
    empId: '',
    name: '',
    department: 'Engineering',
    gender: 'Male',
    phone: '',
    localAddress: '',
    permanentAddress: ''
  });

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData({
        empId: `EMP-${Math.floor(1000 + Math.random() * 9000)}`,
        name: '',
        department: 'Engineering',
        gender: 'Male',
        phone: '',
        localAddress: '',
        permanentAddress: ''
      });
    }
  }, [editingEmployee, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    onSave(formData);
    onClose();
  };

  return (
    <div className="a3-modal-overlay">
      <div className="a3-modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 className="a3-modal-title" style={{ margin: 0 }}>
            {editingEmployee ? 'Edit Employee Details' : 'Add New Employee'}
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="a3-form-grid">
            <div className="a1-form-group">
              <label className="a1-label">Employee ID</label>
              <input
                type="text"
                className="a1-input"
                value={formData.empId}
                readOnly
                style={{ opacity: 0.7 }}
              />
            </div>

            <div className="a1-form-group">
              <label className="a1-label">Full Name *</label>
              <input
                type="text"
                className="a1-input"
                required
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="a1-form-group">
              <label className="a1-label">Department *</label>
              <select
                className="a1-input"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              >
                <option value="Engineering">Engineering</option>
                <option value="Farm Management">Farm Management</option>
                <option value="Operations">Operations</option>
                <option value="HR & Admin">HR & Admin</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            <div className="a1-form-group">
              <label className="a1-label">Gender</label>
              <select
                className="a1-input"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="a1-form-group" style={{ gridColumn: 'span 2' }}>
              <label className="a1-label">Phone Number *</label>
              <input
                type="tel"
                className="a1-input"
                required
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="a1-form-group" style={{ gridColumn: 'span 2' }}>
              <label className="a1-label">Local Address</label>
              <textarea
                className="a1-textarea"
                rows="2"
                placeholder="Current residence address..."
                value={formData.localAddress}
                onChange={(e) => setFormData({ ...formData, localAddress: e.target.value })}
              ></textarea>
            </div>

            <div className="a1-form-group" style={{ gridColumn: 'span 2' }}>
              <label className="a1-label">Permanent Address</label>
              <textarea
                className="a1-textarea"
                rows="2"
                placeholder="Permanent hometown address..."
                value={formData.permanentAddress}
                onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
              ></textarea>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#cbd5e1',
                border: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="a3-btn-add"
              style={{ padding: '0.65rem 1.5rem' }}
            >
              <Check size={16} /> Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
