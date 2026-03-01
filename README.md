# OWASP Juice Shop (HW3)

## Project Overview
This project implements a basic login form inspired by the OWASP Juice Shop login page. The application includes both client-side and server-side validation to ensure user credentials meet required input standards before processing login requests.

---

## Features Implemented

### Login Form
- Email input field
- Password input field
- Interface similar to a basic Juice Shop login page

### Client-Side Validation
Implemented using JavaScript:
- Prevents empty email or password submission
- Verifies email contains an "@" symbol
- Ensures password length is at least 8 characters
- Displays error messages

### Server-Side Validation
Implemented using Node.js and Express:
- Re-validates email and password inputs
- Prevents bypassing validation through browser manipulation
- Returns validation responses from the server

---

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js


---

## Installation & Running Locally

### 1. Clone Repository

git clone https://github.com/jtweltens13/OWASP-Juice-Shop.git

### 2. Install Dependencies

npm install

### 3. Start Server

node server.js

### 4. Open Application
Navigate to: http://localhost:3000


---


## Validation Approach

### Client-Side Validation
JavaScript checks user input before sending data to the server to improve usability and reduce unnecessary requests.

### Server-Side Validation
All inputs are validated again on the server to ensure security even if client-side validation is bypassed.

---

## Assignment Information
Course Assignment: OWASP Juice Shop (HW3)
Part 2 – Implement a Simple Front-End Form

---

## Author
Jack Weltens