import React, { useState } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import './styles.css';

const initialStudents = [
  {
    id: 1,
    name: 'Sophia Chen',
    rollNumber: 'CS202401',
    department: 'Computer Science',
    semester: 6,
    cgpa: 3.92,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Ethan Rodriguez',
    rollNumber: 'AI202415',
    department: 'AI & Data Science',
    semester: 4,
    cgpa: 3.85,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Emma Watson',
    rollNumber: 'EE202408',
    department: 'Electrical Eng.',
    semester: 8,
    cgpa: 3.45,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'Marcus Vance',
    rollNumber: 'CS202442',
    department: 'Computer Science',
    semester: 6,
    cgpa: 3.78,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 5,
    name: 'Priya Sharma',
    rollNumber: 'ME202419',
    department: 'Mechanical Eng.',
    semester: 4,
    cgpa: 3.62,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 6,
    name: 'Lucas Dupont',
    rollNumber: 'AI202488',
    department: 'AI & Data Science',
    semester: 2,
    cgpa: 3.96,
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  }
];

export default function Assignment2App() {
  const [students] = useState(initialStudents);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' | 'asc'

  // Extract unique departments
  const departments = Array.from(new Set(students.map((s) => s.department)));

  // Filter students
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'ALL' || student.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  // Sort students by CGPA
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    return sortOrder === 'desc' ? b.cgpa - a.cgpa : a.cgpa - b.cgpa;
  });

  const handleToggleSort = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <div className="a2-container">
      <Header
        title="Student Information Management Portal"
        subtitle="Manage student academic metrics, departments, and CGPA performance using Props"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDept={selectedDept}
        onDeptChange={setSelectedDept}
        sortOrder={sortOrder}
        onToggleSort={handleToggleSort}
        departments={departments}
        totalCount={sortedStudents.length}
      />

      <main className="a2-main">
        {/* Pass sorted & filtered students as Props to StudentList */}
        <StudentList students={sortedStudents} />
      </main>

      <Footer systemName="Academic Student Portal" academicYear={new Date().getFullYear()} />
    </div>
  );
}
