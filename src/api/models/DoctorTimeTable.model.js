// const db = require("./db") // Import your database configuration
import db from "./db.js"
class TimeTable {
  constructor(doctor_id,weekly_plan){
    this.doctor_id = doctor_id
    this.weekly_plan = weekly_plan
  }

    static async createTimeTable(doctor_id,weekly_plan) {
        const { rows } = await db.query(
            "INSERT INTO public.'TimeTable' (doctor_id,weekly_plan) VALUES ($1, $2);",
            [doctor_id,weekly_plan]
        )
        const newTimeTable = rows[0]
        return new TimeTable(
            newTimeTable.doctor_id,
            newTimeTable.weekly_plan
        )
        }
    
    
    static async getTimeTableByDoctorId(doctor_id) {
        const { rows } = await db.query(
            'SELECT * FROM public."TimeTable" WHERE doctor_id = $1',
            [doctor_id]
        )
        const timeTable = rows[0]
        return new TimeTable(
            timeTable.doctor_id,
            timeTable.weekly_plan
        )
    }

  
    
    
}

export default MedicalOfficer