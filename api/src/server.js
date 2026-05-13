import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

// .env kullan
dotenv.config();
// DB bağlantı
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {console.log("✅ Database connected")})
  .catch((err) => {console.log("⚠️ Database unconnected!");
  });
// Port
  app.listen(process.env.PORT, () => {
   console.log("Server running on port", process.env.PORT);
 });