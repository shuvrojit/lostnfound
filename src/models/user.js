import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  email: String,
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model(UserSchema)

export default User
