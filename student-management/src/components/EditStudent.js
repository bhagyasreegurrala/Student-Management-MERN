import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Form.css';

function EditStudent() {
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
  const { id } = useParams();

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
        toast.error('Failed to load student data!');
      }
    }
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({ ...student, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, student);
      toast.success('Student updated successfully!');
      navigate('/list');
    } catch (err) {
      console.error('Update error:', err);
      toast.error('Failed to update student!');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Edit Student</h2>
      <input
        type="text"
        name="studentId"
        value={student.studentId}
        onChange={handleChange}
        disabled
      />
      <input
        type="text"
        name="firstName"
        value={student.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={student.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="date"
        name="dob"
        value={student.dob}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        value={student.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        type="text"
        name="enrollmentYear"
        value={student.enrollmentYear}
        onChange={handleChange}
        placeholder="Enrollment Year"
        required
      />
      <label className="checkbox-label">
        Active
        <input
          type="checkbox"
          name="isActive"
          checked={student.isActive}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Student</button>
    </form>
  );
}

export default EditStudent;
