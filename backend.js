const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

const uri = "mongodb+srv://anukeerthi:anu%402002@project.0z79c3l.mongodb.net/";
const client = new MongoClient(uri);

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.use(express.static("public"));

app.get("/api/students", async (req, res) => {
    const studentId = parseInt(req.query.id);
    console.log(`Received RFID Card ID: ${studentId}`);

    try {
        await client.connect();
        const database = client.db("Project");
        const collection = database.collection("Students");

        const student = await collection.findOne({ unique_id: Int32Array(studentId) });

        if (student) {
            console.log("Student found:", student);
            res.json(student);
        } else {
            console.log("Student not found for RFID Card ID:", studentId);
            res.status(404).json({ error: "Student not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    } finally {
        client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
