const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = 3000;

// Allow Express to read JSON
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// MySQL connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),

    ssl: {
        minVersion: "TLSv1.2"
    }
});

// Test database connection
app.get("/api/health", async (req, res) => {

    try {

        await db.query("SELECT 1");

        res.json({
            success: true,
            message: "Database connected!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Database connection failed."
        });

    }
});

// Receive contact
app.post("/api/contacts", async (req, res) => {

    const phone = req.body.phone;

    console.log("Received:", phone);

    try {

        await db.query(
            "INSERT INTO contacts (phone) VALUES (?)",
            [phone]
        );

        res.status(201).json({
            success: true,
            message: "Your number has been saved!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Could not save your number."
        });

    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});