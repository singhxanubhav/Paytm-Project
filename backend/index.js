import express from "express"
import cors from "cors"

import mainRoute from "./routes/index.js"

const app = express()

app.use(cors());
app.use(express.json())

app.use("/api/v1", mainRoute)
app.listen(3000)


