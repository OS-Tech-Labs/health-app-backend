// const db = require("./db") // Import your database configuration
import db from "./db.js"
class MedicalOfficer {
  constructor(user_id, officer_id)
    {
        this.user_id = user_id
        this.officer_id = officer_id
    }

    static async createMedicalOfficer(user_id) {
        const { rows } = await db.query(
            "INSERT INTO public.'MedicalOfficer' (user_id) VALUES ($1);",
            [user_id]
        )
        const newMedicalOfficer = rows[0]
        return new MedicalOfficer(
            newMedicalOfficer.user_id,
            newMedicalOfficer.officer_id
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