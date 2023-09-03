
import DoctorDetails from "../models/doctorDetails.model.js"
  
  
  const createDoctorDetails = async (req, res) => {
    const officer_id = req.body.officer_id
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const contact_number = req.body.contact_number
    const specialization = req.body.specialization
  
    try {
      const doctorDetails = await DoctorDetails.createDoctorDetails(officer_id, first_name,last_name, email, contact_number,specialization)
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  
    console.log("Registration function")
  }

  const getDoctorDetails = async (req, res) => {
    try {
      const doctorDetails = await DoctorDetails.getDoctorDetails()
      return res.send(doctorDetails)
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  }
  
  export default { getDoctorDetails, createDoctorDetails }
  