const Patient = require('../models/patient')

module.exports = {
  findAll: async () => {
    return await Patient.find()
  },

  findById: async (id) => {
    return await Patient.findById(id)
  },

  create: async (patientData) => {
    const patient = new Patient(patientData)
    await patient.save()
  },

  update: async (id, patientData) => {
    await Patient.findByIdAndUpdate(id, patientData)
  },

  delete: async (id) => {
    await Patient.findByIdAndDelete(id)
  }
}
