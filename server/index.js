const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const authRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const multer = require("multer");
const { storage } = require("./config/storage");
const { register } = require("./controllers/user");
const employeeRoutes = require("./routes/employee");
const transactionRoutes = require("./routes/transaction");

const app = express();

dotenv.config();

const port = process.env.PORT || 5001;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const upload = multer({ storage });

//routes
app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/transaction", transactionRoutes);

//routes with files

app.post("/api/auth/register", upload.single("file"), register);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
