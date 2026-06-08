import express from "express";
import categoryRoutes from "./routes/categoryRoute.js";
import articleRoutes from "./routes/articleRoute.js";
import groupRoutes from "./routes/groupsRoute.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

// express uygulaması oluştur
const app = express();
// middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


// routes
app.use("/api/categories", categoryRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/auth", authRoutes);



export default app;