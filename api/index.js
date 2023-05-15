import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomRoute from "./routes/room.js"
import cookieParser from "cookie-parser"


const app = express();
dotenv.config();
const uri = "mongodb+srv://luxaseaa:79OJsEpPDFq1JVir@luxasea.r7ce6sx.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connect Backend MongoDB Success!');
      
  } catch (error) {
    console.log('Connect Backend MongoDB false!');
    throw(error);
  }
};

mongoose.connection.on("disconnected" , () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("connected" , () => {
  console.log("Connected from MongoDB!");
});

//middlewares

//have req come first 
app.use(cookieParser());
app.use(express.json());

// after check route
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/room", roomRoute);

// end finish call api hotel done, run here 
app.use((err,req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
      success : false,
      status : errorStatus,
      message : errorMessage,
      stack : err.stack
  });
})

// app.use((req, res, next) => {
//   res.send("Hello form MidleWare!")
// })

app.listen(8800, () => {
  connect();
  console.log("Connected to backend http://localhost:8800/");
});
