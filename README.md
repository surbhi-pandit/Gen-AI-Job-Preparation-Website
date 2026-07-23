# 🤖 AI Interview Preparation Platform

> An AI-powered interview preparation platform that simulates real interview experiences using Generative AI. The platform allows users to upload their resumes, practice technical and HR interviews, receive AI-generated questions, and get personalized performance analysis with detailed feedback.


---

# 📖 Overview

Preparing for technical interviews often requires personalized practice, realistic interview simulations, and constructive feedback. This project addresses these challenges by leveraging **Google Gemini AI** to create an intelligent interview preparation experience.

Users can upload their resumes, and the AI analyzes their profile to generate relevant interview questions. The platform conducts mock interviews, evaluates user responses, and provides comprehensive performance reports highlighting strengths, weaknesses, and areas for improvement.

This project demonstrates the integration of modern web development technologies with Generative AI to build a practical, real-world application.

---

# ✨ Key Features

### 👤 User Authentication
- Secure Sign Up and Login
- JWT-based Authentication
- Protected Routes

### 📄 Resume Upload
- Upload Resume in PDF format
- Automatic Resume Parsing
- Extracts user information

### 🤖 AI Interview Generator
- AI-generated Technical Questions
- HR Interview Questions
- Resume-based Interview Questions
- Dynamic Question Generation using Google Gemini AI

---

# 🛠️ Tech Stack

## Frontend

React.js - User Interface
React Router - Routing
Axios - API Calls
SCSS/CSS - Styling
Vite - Development Environment

---

## Backend

Node.js - Runtime 
Express.js - REST API 
MongoDB - Database 
Mongoose - ODM 
JWT - Authentication 
Multer - Resume Upload 
PDF Parser - Resume Processing 
Google Gemini API - AI Question Generation 

---

# 🏗️ System Architecture

                    User
                      │
                      ▼
            React Frontend (Vite)
                      │
          REST API Requests (Axios)
                      │
                      ▼
          Express.js + Node.js Backend
             │                 │
             │                 │
             ▼                 ▼
      MongoDB Database    Google Gemini AI
             │
             ▼
      Interview Reports

---


# 🔄 Application Workflow

User Registration
        │
        ▼
      Login
        │
        ▼
Upload Resume (PDF)
        │
        ▼
Resume Parsing
        │
        ▼
Google Gemini AI
Generates Interview Questions
        │
        ▼
Mock Interview
        │
        ▼
User Answers Questions
        │
        ▼
AI Evaluates Responses
        │
        ▼
Performance Report
        │
        ▼
Interview Saved in MongoDB

---

# 📌 Future Enhancements

- 🎙️ Voice-based Interview
- 🎥 Video Interview
- 💻 Live Coding Interview
- 📈 Dashboard Analytics
- 🏆 Leaderboard
- 🌙 Dark Mode
- 📅 Interview Scheduling
- 📧 Email Report
- 🔔 Notifications
- 🌍 Multi-language Support

---

# 🎯 Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- REST API Design
- Authentication using JWT
- MongoDB Integration
- File Upload using Multer
- PDF Parsing
- Google Gemini API Integration
- Prompt Engineering
- State Management in React
- AI-powered Web Applications
- Full Stack Deployment

---

# 👨‍💻 Author

**Surbhi Pandit**

MCA Student | MERN Stack Developer | Java Developer

🔗 LinkedIn: https://linkedin.com/in/surbhi-pandit

🐙 GitHub: https://github.com/surbhipandit

---

# ⭐ Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.

---

# 📄 License

This project is licensed under the MIT License.
