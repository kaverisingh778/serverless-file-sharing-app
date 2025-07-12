# 🚀 Serverless File Sharing App

A secure, serverless file-sharing application that allows users to upload files to AWS S3 via pre-signed URLs using a React frontend and AWS Lambda backend.

🔗 **Live Demo**: [https://serverlessfilesharing.netlify.app](https://serverlessfilesharing.netlify.app)

---

## ✨ Features

- 📁 Upload files directly to S3 using pre-signed URLs
- ⚙️ Backend built with AWS Lambda & API Gateway
- 🧼 No server to manage — fully serverless!
- 🧠 Clean ReactJS frontend UI
- 🌍 Deployed on Netlify with GitHub CI/CD

---

## ⚙️ Tech Stack

- **Frontend**: React, Axios, HTML, CSS
- **Backend**: AWS Lambda, API Gateway
- **Storage**: Amazon S3 (Pre-signed Upload URLs)
- **Deployment**: Netlify + GitHub

---

## 🚦 How It Works

1. The React app calls a Lambda function via API Gateway.
2. The Lambda function generates a secure, time-limited S3 pre-signed URL.
3. The frontend uses this URL to upload the file directly to S3.

---

## 📂 Folder Structure

