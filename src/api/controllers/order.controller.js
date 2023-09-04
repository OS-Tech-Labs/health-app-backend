
import Booking from "../models/booking.model"

const createBooking = async (req, res) => {
    const patient_id = req.body.patient_id
    const doctor_id = req.body.doctor_id
    const description = req.body.description
    const date = req.body.date
    const time = req.body.time
  
    try {
      const booking = await Booking.createBooking(patient_id,doctor_id,description,date,time)
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  
   
  }
  
    const getBookingByPatientId = async (req, res) => {
        const patient_id = req.body.patient_id
        try {
            const booking = await Booking.getBookingByPatientId(patient_id)
            return res.send(booking)
        } catch (err) {
            console.log(err)
            return res.send({ approved: false })
        }
        }

    const getBookingByDoctorId = async (req, res) => {
        const doctor_id = req.body.doctor_id
        try {
            const booking = await Booking.getBookingByDoctorId(doctor_id)
            return res.send(booking)
        } catch (err) {
            console.log(err)
            return res.send({ approved: false })
        }
        }
  export default { createBooking,getBookingByPatientId,getBookingByDoctorId}

  

  