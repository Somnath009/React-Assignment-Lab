import React from 'react';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Assignment1App from '../assignment-1/Assignment1App';
import Assignment2App from '../assignment-2/Assignment2App';
import Assignment3App from '../assignment-3/Assignment3App';
import Assignment4App from '../assignment-4/Assignment4App';
import Assignment5App from '../assignment-5/Assignment5App';
import Assignment6App from '../assignment-6/Assignment6App';
import Assignment7App from '../assignment-7/Assignment7App';
import { Code2, ArrowRight, CheckCircle2, Sparkles, FolderCheck, Rocket } from 'lucide-react';

function HomeHub() {
  const assignments = [
    {
      num: 1,
      title: 'React Setup & Personal Portfolio',
      path: '/assignment-1',
      desc: 'Header, Footer, Navbar, About Me, Education, Skills, Contact Info with 6+ JSX components and External CSS.',
      tags: ['JSX Only', 'External CSS', 'Responsive Grid', '6+ Components']
    },
    {
      num: 2,
      title: 'Student Management via Props',
      path: '/assignment-2',
      desc: 'Display student cards with Name, Roll, Dept, Sem, CGPA, Photo. Pass all data through Props & sort by CGPA.',
      tags: ['Props Passing', 'CGPA Sorting', 'Dept Filter', 'Card Props']
    },
    {
      num: 3,
      title: 'Employee Directory with State & Events',
      path: '/assignment-3',
      desc: 'Manage employee data with Add, Delete, Edit modals, realtime search, department filters, and stats.',
      tags: ['useState()', 'Event Handlers', 'Modals', 'CRUD Actions']
    },
    {
      num: 4,
      title: 'Weather Dashboard using API',
      path: '/assignment-4',
      desc: 'Fetch Temperature, Humidity, Wind Speed, Weather Icon, Sunrise/Sunset using OpenWeatherMap API & async/await.',
      tags: ['Async/Await', 'useEffect()', 'Weather API', 'Loading Spinner']
    },
    {
      num: 5,
      title: 'Online Shopping Cart System',
      path: '/assignment-5',
      desc: 'Cart reducer state, Product List, Quantity updates, percentage coupon discount codes, and 18% GST calculation.',
      tags: ['useReducer', 'Context API', 'Coupon Code', 'GST Calculation']
    },
    {
      num: 6,
      title: 'Task Manager with React Router',
      path: '/assignment-6/dashboard',
      desc: 'SPA Task Manager with Dashboard, Tasks, Add Task, Completed Tasks, and Task Details (/tasks/:id) dynamic route.',
      tags: ['React Router v6', 'Dynamic Routes', 'URL Parameters', 'Status Filters']
    },
    {
      num: 7,
      title: 'Authentication & Protected System',
      path: '/assignment-7/login',
      desc: 'Login/logout authentication flow, JWT token simulation, remember me persistence, and password strength meter.',
      tags: ['LocalStorage', 'JWT Simulation', 'Password Strength', 'Protected Routes']
    }
  ];

  return (
    <div>
      <div className="hub-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '9999px', color: '#38bdf8', fontSize: '0.85rem', fontWeight: '700', marginBottom: '1rem' }}>
          <Sparkles size={14} /> Full React Assignment Suite (1 to 7 Complete)
        </div>
        <h1 className="hub-title">React Lab Assignments Portal</h1>
        <p className="hub-subtitle">
          Comprehensive suite of 7 interactive React projects built according to exact PDF requirements with modern styling, clean architecture, and full functionality.
        </p>
      </div>

      <div className="hub-grid">
        {assignments.map((item) => (
          <div key={item.num} className="hub-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ background: 'linear-gradient(90deg, #0284c7, #4f46e5)', color: '#fff', fontSize: '0.75rem', fontWeight: '800', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                  Assignment {item.num}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: '600' }}>
                  <CheckCircle2 size={14} /> Ready
                </span>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#f8fafc', marginBottom: '0.5rem' }}>
                {item.title}
              </h2>

              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                {item.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {item.tags.map((t, idx) => (
                  <span key={idx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                padding: '0.65rem',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Launch Assignment {item.num} <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div>
      <header className="master-header">
        <div className="master-header-inner">
          <Link to="/" className="master-logo">
            <Code2 size={22} color="#38bdf8" /> React Lab (Assignments 1–7)
          </Link>

          <nav>
            <ul className="master-tabs">
              <li>
                <NavLink to="/" end className={({ isActive }) => `master-tab-item ${isActive ? 'active' : ''}`}>
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-1" className={({ isActive }) => `master-tab-item ${isActive ? 'active' : ''}`}>
                  Assign 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-2" className={({ isActive }) => `master-tab-item ${isActive ? 'active' : ''}`}>
                  Assign 2
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-3" className={({ isActive }) => `master-tab-item ${isActive ? 'active' : ''}`}>
                  Assign 3
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-4" className={({ isActive }) => `master-tab-item ${isActive ? 'active' : ''}`}>
                  Assign 4
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-5" className={({ isActive }) => `master-tab-item ${isActive ? 'active' : ''}`}>
                  Assign 5
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-6/dashboard" className={({ isActive }) => `master-tab-item ${isActive || location.pathname.startsWith('/assignment-6') ? 'active' : ''}`}>
                  Assign 6
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignment-7/login" className={({ isActive }) => `master-tab-item ${isActive || location.pathname.startsWith('/assignment-7') ? 'active' : ''}`}>
                  Assign 7
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomeHub />} />
        <Route path="/assignment-1/*" element={<Assignment1App />} />
        <Route path="/assignment-2/*" element={<Assignment2App />} />
        <Route path="/assignment-3/*" element={<Assignment3App />} />
        <Route path="/assignment-4/*" element={<Assignment4App />} />
        <Route path="/assignment-5/*" element={<Assignment5App />} />
        <Route path="/assignment-6/*" element={<Assignment6App basePath="/assignment-6" />} />
        <Route path="/assignment-7/*" element={<Assignment7App basePath="/assignment-7" />} />
      </Routes>
    </div>
  );
}
