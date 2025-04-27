import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Form.css';

function AddStudent() {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({ ...student, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', student);
      toast.success('Student added successfully!');
      navigate('/list');
    } catch (err) {
      toast.error('Failed to add student!');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} required />
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="date" name="dob" onChange={handleChange} required />
      <input type="text" name="department" placeholder="Department" onChange={handleChange} required />
      <input type="text" name="enrollmentYear" placeholder="Enrollment Year" onChange={handleChange} required />
      <label>
        Active
        <input type="checkbox" name="isActive" checked={student.isActive} onChange={handleChange} />
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
