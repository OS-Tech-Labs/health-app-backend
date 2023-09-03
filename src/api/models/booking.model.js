// const db = require("./db") // Import your database configuration
import db from "./db.js"
class Booking {
  constructor(booking_id,patient_id,doctor_id,description,date)
    {
        this.booking_id = booking_id
        this.patient_id = patient_id
        this.doctor_id = doctor_id
        this.description = description
        this.date = date
    }

   
    static async createBooking(patient_id,doctor_id,description,date) {
        const { rows } = await db.query(
            "INSERT INTO public.'Booking' (booking_id,patient_id,doctor_id,description,date) VALUES (DEFAULT, $1, $2, $3, $4);",
            [patient_id,doctor_id,description,date]
        )
        const newBooking = rows[0]
        return new Booking(
            newBooking.booking_id,
            newBooking.patient_id,
            newBooking.doctor_id,
            newBooking.description,
            newBooking.date
        )
        }
    
    static async getMedicalOffcerByUserId(user_id) {
        const { rows } = await db.query(
            'SELECT * FROM public."MedicalOfficer" WHERE user_id = $1',
            [user_id]
        )
        const medicalOfficer = rows[0]
        return new MedicalOfficer(
            medicalOfficer.user_id,
            medicalOfficer.officer_id
        )
    }

  
    
    
}

export default MedicalOfficer