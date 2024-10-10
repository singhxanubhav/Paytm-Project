import express from "express"
import mainRoute from "./routes/index.js"

const app = express()


app.use("/api/v1", mainRoute)


