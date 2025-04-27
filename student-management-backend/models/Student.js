
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  department: { type: String, required: true },
  enrollmentYear: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Student', studentSchema);