
import DoctorDetails from "../models/doctorDetails.model.js"
import MedicalOfficer from "../models/medicalOfficer.model.js"
import TimeTable from "../models/DoctorTimeTable.model.js"
  
  
  const getDoctorDetails = async (req, res) => {
    const specialization = req.body.specialization
    try {
      const doctorDetails = await DoctorDetails.getDoctorDetails( specialization)
      return res.send(doctorDetails)
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  }
  
  const getTimeTableByDoctorId = async (req, res) => {
    const doctor_id = req.body.doctor_id
    try {
      const timeTable = await TimeTable.getTimeTableByDoctorId(doctor_id)
      return res.send(timeTable)
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  }
  export default { getDoctorDetails,getTimeTableByDoctorId }

  

  