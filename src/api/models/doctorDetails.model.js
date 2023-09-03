// const db = require("./db") // Import your database configuration
import db from "./db.js"
class DoctorDetails {
  constructor(doctor_id,officer_id, first_name,last_name, email, contact_number,specialization) {
    this.doctor_id = doctor_id
    this.officer_id = officer_id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.contact_number = contact_number
    this.specialization = specialization
  }

  static async createDoctorDetails(officer_id, first_name,last_name, email, contact_number,specialization) {
    const { rows } = await db.query(
      "INSERT INTO public.'DoctorDetails' (doctor_id,officer_id, first_name,last_name, email, contact_number,specialization) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6);",
        [officer_id, first_name,last_name, email, contact_number,specialization]

    )
    
    const newDoctorDetails = rows[0]
    return new DoctorDetails(
      newDoctorDetails.doctor_id,
      newDoctorDetails.officer_id,
      newDoctorDetails.first_name,
      newDoctorDetails.last_name,
      newDoctorDetails.email,
      newDoctorDetails.contact_number,
      newDoctorDetails.specialization
    )
  }

  static async getDoctorDetails() {
    const { rows } = await db.query(
      'SELECT * FROM public."DoctorDetails"',
      
    )
    const doctors = rows.map((doctor) => new DoctorDetails(
      doctor.doctor_id = doctor.doctor_id,
      doctor.officer_id = doctor.officer_id,
      doctor.first_name = doctor.first_name,
      doctor.last_name = doctor.last_name,
      doctor.email = doctor.email,
      doctor.contact_number = doctor.contact_number,
      doctor.specialization = doctor.specialization
    ));
    
    return doctors
  }
}

export default DoctorDetails
