import React from 'react';
import { FaPlus, FaList, FaUserEdit, FaTrash } from 'react-icons/fa';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to the Student Management System</h1>
        <p>Effortlessly add, view, edit, and delete student records in one place.</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <FaPlus className="feature-icon" />
          <h3>Add Students</h3>
          <p>Create new student records with all essential details captured.</p>
        </div>
        <div className="feature-card">
          <FaList className="feature-icon" />
          <h3>View All</h3>
          <p>Browse the complete list of students in a clean, sortable table.</p>
        </div>
        <div className="feature-card">
          <FaUserEdit className="feature-icon" />
          <h3>Edit Records</h3>
          <p>Quickly update student information to keep your data accurate.</p>
        </div>
        <div className="feature-card">
          <FaTrash className="feature-icon" />
          <h3>Delete Entries</h3>
          <p>Remove outdated or incorrect records with a single click.</p>
        </div>
      </section>
    </>
  );
}
