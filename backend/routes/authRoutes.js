const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const transporter = require("../config/mailConfig");
const Student = require("../models/Student");

const router = express.Router();

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    // Welcome Email
    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: email,

      subject: "Welcome to School ERP Portal",

      text: `Hello ${name},

Your account has been created successfully.

Role: ${role}

Welcome to P.S SARANGPUR GOPALPUR ERP Portal.`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    // Response
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    const student = await Student.findOne({
      name: user.name,
    });

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // Response
    res.json({
      token,
      _id: user._id,
      role: user.role,
      name: user.name,
      email: user.email,
      className: student?.className || "",

      rollNumber: student?.rollNumber || "",

      fatherName: student?.fatherName || "",

      mobile: student?.mobile || "",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= FORGOT PASSWORD =================
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Generate Reset Token
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    // Reset Link
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    // Email
    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: email,

      subject: "Reset Password",

      html: `
          <h2>Password Reset</h2>

          <p>Click the button below to reset your password:</p>

          <a
            href="${resetLink}"
            style="
              background:#1e3a8a;
              color:white;
              padding:12px 20px;
              text-decoration:none;
              border-radius:8px;
              display:inline-block;
            "
          >
            Reset Password
          </a>
        `,
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    res.json({
      message: "Password reset email sent",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const { password } = req.body;

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update Password
    await User.findByIdAndUpdate(decoded.id, {
      password: hashedPassword,
    });

    res.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Invalid or expired token",
    });
  }
});

module.exports = router;
