// const db = require("./db") // Import your database configuration
import db from "./db.js"
class Booking {
  constructor(booking_id,patient_id,doctor_id,description,date,time) {
    
        this.booking_id = booking_id
        this.patient_id = patient_id
        this.doctor_id = doctor_id
        this.description = description
        this.date = date
        this.time = time

    }

   
    static async createBooking(patient_id,doctor_id,description,date,time) {
        const { rows } = await db.query(
            "INSERT INTO public.'Booking' (booking_id,patient_id,doctor_id,description,date,time) VALUES (DEFAULT, $1, $2, $3, $4, $5);",
            [patient_id,doctor_id,description,date,time]
        )
        const newBooking = rows[0]
        return new Booking(
            newBooking.booking_id,
            newBooking.patient_id,
            newBooking.doctor_id,
            newBooking.description,
            newBooking.date,
            newBooking.time
        )
        }
    
    static async getBookingByPatientId(patient_id) {
        const { rows } = await db.query(
            'SELECT * FROM public."Booking" WHERE patient_id = $1',
            [patient_id]
        )
        const booking = rows[0]
        return new Booking(
            booking.booking_id,
            booking.patient_id,
            booking.doctor_id,
            booking.description,
            booking.date,
            booking.time
        )
    }
    static async getBookingByDoctorId(doctor_id) {
        const { rows } = await db.query(
            'SELECT * FROM public."Booking" WHERE doctor_id = $1',
            [doctor_id]
        )
        const booking = rows[0]
        return new Booking(
            booking.booking_id,
            booking.patient_id,
            booking.doctor_id,
            booking.description,
            booking.date,
            booking.time
        )
    }

    
    
}

export default Booking