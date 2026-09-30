import React, { useState } from 'react';
import EmployeeStats from './components/EmployeeStats';
import EmployeeCard from './components/EmployeeCard';
import EmployeeModal from './components/EmployeeModal';
import { Plus, Search, Building2, UserX } from 'lucide-react';
import './styles.css';

const initialEmployees = [
  {
    id: 1,
    empId: 'EMP-1001',
    name: 'David Miller',
    department: 'Farm Management',
    gender: 'Male',
    phone: '+1 (555) 234-8901',
    localAddress: '742 Evergreen Terrace, Springfield, OR',
    permanentAddress: '128 Orchard Lane, Eugene, OR'
  },
  {
    id: 2,
    empId: 'EMP-1002',
    name: 'Sarah Connor',
    department: 'Engineering',
    gender: 'Female',
    phone: '+1 (555) 876-5432',
    localAddress: '404 Innovation Way, Silicon Valley, CA',
    permanentAddress: '12 Bay View Rd, San Francisco, CA'
  },
  {
    id: 3,
    empId: 'EMP-1003',
    name: 'Robert Thorne',
    department: 'Operations',
    gender: 'Male',
    phone: '+1 (555) 345-6789',
    localAddress: '55 Industrial Blvd, Portland, OR',
    permanentAddress: '88 Riverbed St, Salem, OR'
  },
  {
    id: 4,
    empId: 'EMP-1004',
    name: 'Elena Rostova',
    department: 'HR & Admin',
    gender: 'Female',
    phone: '+1 (555) 901-2345',
    localAddress: '100 Corporate Plaza, Seattle, WA',
    permanentAddress: '45 Pine Forest Ave, Spokane, WA'
  },
  {
    id: 5,
    empId: 'EMP-1005',
    name: 'Michael Chang',
    department: 'Engineering',
    gender: 'Male',
    phone: '+1 (555) 678-9012',
    localAddress: '303 Tech Hub Dr, Austin, TX',
    permanentAddress: '707 Lone Star Way, Houston, TX'
  }
];

export default function Assignment3App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const departments = ['ALL', 'Engineering', 'Farm Management', 'Operations', 'HR & Admin', 'Sales'];

  // Search & Department Filter
  const filteredEmployees = employees.filter((emp) => {
    const matchesQuery =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.phone.includes(searchQuery);

    const matchesDept = selectedDept === 'ALL' || emp.department === selectedDept;

    return matchesQuery && matchesDept;
  });

  const handleOpenAdd = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (emp) => {
    setEditingEmployee(emp);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee record?')) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleSave = (employeeData) => {
    if (editingEmployee) {
      // Update
      setEmployees((prev) =>
        prev.map((e) => (e.id === editingEmployee.id ? { ...e, ...employeeData } : e))
      );
    } else {
      // Create
      const newEmp = {
        ...employeeData,
        id: Date.now()
      };
      setEmployees((prev) => [newEmp, ...prev]);
    }
  };

  return (
    <div className="a3-container">
      <header className="a3-header">
        <div className="a3-header-inner">
          <div>
            <h1 className="a3-title">Employee Directory System</h1>
            <p style={{ color: '#94a3b8', margin: 0 }}>
              Manage corporate & farm staff records with React State and Event Handlers
            </p>
          </div>
          <button className="a3-btn-add" onClick={handleOpenAdd}>
            <Plus size={18} /> Add New Employee
          </button>
        </div>
      </header>

      <main className="a3-main">
        {/* Statistics Component */}
        <EmployeeStats employees={employees} />

        {/* Toolbar Filter & Search */}
        <div className="a3-toolbar">
          <div className="a3-search-box">
            <Search
              size={18}
              color="#94a3b8"
              style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              className="a3-search-input"
              placeholder="Search by name, employee ID, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="a3-dept-filter-list">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`a3-filter-chip ${selectedDept === dept ? 'active' : ''}`}
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Employee Cards Grid */}
        {filteredEmployees.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: '16px',
            border: '1px dashed rgba(255,255,255,0.1)',
            color: '#94a3b8'
          }}>
            <UserX size={40} style={{ margin: '0 auto 1rem', color: '#f43f5e' }} />
            <h3>No Employees Match Your Criteria</h3>
            <p>Try clearing your search query or selecting another department filter.</p>
          </div>
        ) : (
          <div className="a3-emp-grid">
            {filteredEmployees.map((emp) => (
              <EmployeeCard
                key={emp.id}
                employee={emp}
                onEdit={handleOpenEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      {/* Add / Edit Form Modal */}
      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingEmployee={editingEmployee}
      />
    </div>
  );
}
