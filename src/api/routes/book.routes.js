import express from "express"

import orderController from "../controllers/order.controller"
import PickDoctorController from "../controllers/PickDoctor.controller"


//const { login, register } = userController
const { createBooking, getBookingByDoctorId, getBookingByPatientId } = orderController
const { getDoctorDetails, getTimeTableByDoctorId } = PickDoctorController
const router = express.Router()

router.get("/")
router.post("/placeOrder", createBooking)
router.post("/getMybookingsPatient", getBookingByPatientId)
router.post("/getMybookingsDoctor", getBookingByDoctorId)
router.post("/doctorDetails", getDoctorDetails)


// module.exports = router

export default router
