import React, { useState } from 'react';
import { Phone, MapPin, Edit, Trash2, ChevronDown, ChevronUp, User } from 'lucide-react';

export default function EmployeeCard({ employee, onEdit, onDelete }) {
  const [showAddresses, setShowAddresses] = useState(false);

  return (
    <div className="a3-emp-card">
      <div>
        <div className="a3-emp-header">
          <div>
            <h4 className="a3-emp-name">{employee.name}</h4>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Gender: {employee.gender}
            </span>
          </div>
          <span className="a3-emp-id">{employee.empId}</span>
        </div>

        <div className="a3-emp-details">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#94a3b8' }}>Department:</span>
            <strong style={{ color: '#38bdf8' }}>{employee.department}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
            <Phone size={14} color="#818cf8" />
            <span>{employee.phone}</span>
          </div>

          <button
            onClick={() => setShowAddresses(!showAddresses)}
            style={{
              background: 'none',
              border: 'none',
              color: '#38bdf8',
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              marginTop: '0.5rem',
              padding: 0
            }}
          >
            <MapPin size={14} />
            {showAddresses ? 'Hide Address Details' : 'View Addresses'}
            {showAddresses ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showAddresses && (
            <div className="a3-address-box">
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>LOCAL ADDRESS:</strong>
                <span style={{ color: '#e2e8f0' }}>{employee.localAddress || 'N/A'}</span>
              </div>
              <div>
                <strong style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>PERMANENT ADDRESS:</strong>
                <span style={{ color: '#e2e8f0' }}>{employee.permanentAddress || 'N/A'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="a3-card-actions">
        <button className="a3-btn-edit" onClick={() => onEdit(employee)}>
          <Edit size={14} /> Edit
        </button>
        <button className="a3-btn-delete" onClick={() => onDelete(employee.id)}>
          <Trash2 size={14} /> Delete
        </button>
      </div>
    </div>
  );
}
