import bodyParser from "body-parser"
import express from "express"


const app = express()

bodyParser.json()
bodyParser.urlencoded({extended: true})

app.get("/", (req, res) => {
  res.status(200)
  res.json({message: "home"})
})

export default app
