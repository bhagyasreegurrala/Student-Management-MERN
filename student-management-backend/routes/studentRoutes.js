const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add student!' });
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch students!' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found!' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch student!' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).json({ error: 'Student not found!' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update student!' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found!' });
    }
    res.status(200).json({ message: 'Student deleted successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete student!' });
  }
});

module.exports = router;
