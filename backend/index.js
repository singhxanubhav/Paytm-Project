import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRoute from "./routes/index.js";
import { connectDb } from "./db.js";

const app = express();

dotenv.config({});

const corsOptions = {
  // origin: "https://paytm-project-4r06.onrender.com",
  origin: "*",
    // Replace with the actual frontend domain
  methods: "GET, POST",
};

app.use(cors(corsOptions));  // Add this line to your backend config

// app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server running at port ${PORT}`);
});
