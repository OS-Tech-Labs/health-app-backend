import mongoose from "mongoose"

mongoose.connect(
  "mongodb+srv://samith:rmskk113@cluster0.hrgqraa.mongodb.net/health_app?retryWrites=true&w=majority"
)


const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("Database Connected")
})

export { mongoose, db }
