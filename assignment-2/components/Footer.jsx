import React from 'react';

export default function Footer(props) {
  const { systemName, academicYear } = props;

  return (
    <footer className="a2-footer">
      <p>© {academicYear} {systemName} | All student records passed via React Props</p>
    </footer>
  );
}
