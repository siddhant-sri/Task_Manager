const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//middleware
app.use(cors());
app.use(express.json());

// Routes

// Registration of user
app.post("/registration", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Hashing password using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("pwd", hashedPassword);
    const registerUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstName, lastName, email, hashedPassword]
    );

    res.json({ message: "User registeration Successful !!" });
  } catch (err) {
    console.error(err.message);
  }
});

// Login a user
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let user = await pool.query(
      "SELECT password, user_id from users WHERE email = $1 LIMIT 1",
      [email]
    );
    console.log("user", user);
    if (user.rows.length == 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    console.log("data", user.rows[0]);

    const storedHashedPassword = user.rows[0].password;

    // Hashed password comparison
    const isPasswordValid = await bcrypt.compare(
      password,
      storedHashedPassword
    );
    console.log(isPasswordValid);

    // Generating JWT token
    // .sign(payload, sKey, property)
    const token = jwt.sign({ userId: user.rows[0].user_id }, "$#secret_key", {
      expiresIn: "1h",
    });

    if (isPasswordValid && token) {
      res.status(200).json({ message: "success", token: token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

// Add task
app.post("/task", async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log("re", req.body);
    const token = req.headers["access-token"];
    console.log("token", token);
    if (token == null || token == undefined || token == "") {
      console.log("if");
      return res.json({ message: "Invalid Token" });
    } else {
      console.log("else");
      let userId;
      // Verifying the JWT token
      let isTokenVerified = false;
      jwt.verify(token, "$#secret_key", (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Invalid Token" });
        } else {
          console.log("decoded", decoded);
          userId = decoded.userId;
          isTokenVerified = true;
        }
      });
      console.log("isTokenVerified", isTokenVerified);
      if (isTokenVerified) {
        const newTask = await pool.query(
          "INSERT INTO task (name, description, user_id) VALUES ($1, $2, $3) RETURNING *",
          [name, description, userId]
        );
        res.status(201).json({
          message: "Record added successfully",
          data: newTask.rows[0],
        });
      }
    }
  } catch (err) {
    console.error(err.message);
    res.json({ message: err });
  }
});

// Read task
app.get("/task", async (req, res) => {
  try {
    const taskList = await pool.query("SELECT * FROM task");
    res.json(taskList.rows);
  } catch (err) {
    res.json({ message: err });
    console.error(err.message);
  }
});

// Delete task
app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query(
      "DELETE FROM task WHERE task_id = ($1)",
      [id]
    );

    res.json({ message: "Deleted Successfully!!" });
  } catch (err) {
    // error handling
    res.json({ message: err });
    console.error(err.message);
  }
});

// Update task
app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updateTask = await pool.query(
      "UPDATE task SET name = ($1), description = ($2) WHERE task_id = ($3)",
      [name, description, id]
    );
    res.json({ message: "Record Updated Successfully!!" });
  } catch (err) {
    res.json({ message: err });
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
