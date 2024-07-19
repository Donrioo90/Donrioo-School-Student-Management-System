# Donrioo-School-Student-Management-System

Donrioo School Management System (SMS)

Introduction
The Donrioo School Management System (SMS) is a comprehensive, user-friendly web application designed to streamline school management processes. This application provides features like student information management, attendance tracking, gradebook and assessments, course management, teacher and staff management, parent portal access, and efficient communication tools.

**Table of Contents**
Project Requirements
Features
Installation
Usage
API or Data Source
Event Listeners
Array Iteration

**Good Coding Practices**
Project Requirements
Frontend: HTML/CSS/JS.
Data Source: Access data from a public API or db.json file using json-server.
Data Requirements: API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes.
Async Communication: All interactions between the client and the API should be handled asynchronously using JSON as the communication format.
Single Page Application (SPA): The entire app must run on a single page with no redirects or reloads.
Event Listeners: Implement at least 3 distinct event listeners enabling interactivity. Each should have its own unique callback function.
Array Iteration: Implement at least one instance of array iteration using available array methods.
Good Coding Practices: Follow DRY (Do not repeat yourself) principles by utilizing functions to abstract repetitive code.

**Features**
1. Student Information Management: Centralized student records, enrollment, and progress tracking.
2. Attendance Tracking: Automated recording, real-time reports, and absence notifications.
3. Gradebook and Assessments: Online gradebook, report card generation, customizable assessments.
4. Course Management: Create/manage courses, schedule classes/exams, distribute course materials.
5. Teacher and Staff Management: Manage records, track attendance/performance, assign roles.
6. Parent Portal: Access student information, view attendance/grades, communication with teachers.
7. Communication Tools: Internal messaging, email notifications, announcements/alerts.
8. Reporting and Analytics: Detailed reports, performance analysis, data-driven decisions.

**Installation**
1. Clone the repository
2. git clone https://github.com/Donrioo90/Donrioo-School-Student-Management-System
3. Navigate to the project directory
4. cd donrioo-school-management-system
5. Install json-server if not already installed
6. npm install -g json-server
7. Start the json-server
8. json-server --watch db.json
9. Open index.html in your preferred web browser.

**Usage**
Enter student's name and class in the search fields to fetch and display student details.
Click on the "Register" option to pop up a registration form.
Toggle between dark and day modes using the provided button.
API or Data Source
The project uses db.json to simulate an API. It returns a collection of student objects with attributes like name, class, grade, class attendance, fees paid, and health information.


**Good Coding Practices**
The code follows DRY principles by using functions to handle repetitive tasks like displaying student details and fetching data.
All event listeners are added using JavaScript's .addEventListener() method.
Functions are well-documented, making the code easy to understand and maintain.


**Contact**
For any inquiries or feedback, please contact Ronald M Wanjala through ranjala90@gmail.com
