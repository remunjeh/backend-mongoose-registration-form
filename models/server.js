import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";

const app = express();

dotenv.config();

const { MONGODB_CONNECTION_STRING } = process.env;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/list", async (req, res) => {
  const users = await User.find();

  res.status(200).send(users);
});

app.post("/register", async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    dateOfBirth,
    email,
    telephone,
    gender,
  } = req.body;

  console.log(req.body);

  try {
    const newUser = await User.create({
      username,
      password,
      firstName,
      lastName,
      dateOfBirth,
      email,
      telephone,
      gender,
    });

    res.status(200).send("User created successfully!");
  } catch (error) {
    res.status(500).send("Bad request!" + error.message);
  }
});

mongoose
  .connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected OK!"))
  .catch((error) =>
    console.log("Sorry, database didn't connect ☹️" + error.message)
  );

app.listen(3001, () => {
  console.log("The server is listening for requests on port 3001...🐒");
});