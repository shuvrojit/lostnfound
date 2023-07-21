import mongoose from "mongoose"

const DB_URL = ""

export default function connect() {
  return mongoose.connect(DB_URL)
}
