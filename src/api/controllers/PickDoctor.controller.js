
import DoctorDetails from "../models/doctorDetails.model.js"
  
  
  
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
  
  export default { getDoctorDetails }
  