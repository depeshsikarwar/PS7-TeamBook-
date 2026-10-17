# TeamBook

> **Problem Statement (PS) Number:** PS07  
> **Project Name:** TeamBook  
> **Live Link:** [[https://ps-7-team-book.vercel.app/](https://ps-7-team-book.vercel.app/)]

---

## 📌 Project Overview

**TeamBook** is a modern and responsive Employee Directory and Management Web Application. It provides an intuitive interface for browsing staff members, filtering team members across various company departments, viewing comprehensive employee profiles, and tracking employee tasks/todos.

---

## 🌐 Live Demo

- **Deployment URL:** [[https://ps-7-team-book.vercel.app/](https://ps-7-team-book.vercel.app/)]

---

## 🔌 APIs Used

The application integrates with the [DummyJSON](https://dummyjson.com) REST API to simulate real-world employee data and task management:

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `https://dummyjson.com/users` | `GET` | Fetches the complete list of users/employees with personal and company details. |
| `https://dummyjson.com/users/{id}` | `GET` | Fetches specific details for an individual employee by ID. |
| `https://dummyjson.com/users/{id}/todos` | `GET` | Fetches the list of tasks/todos assigned to a specific employee. |

---

## 🛣️ List of Application Routes

Routing is managed client-side using `react-router-dom`:

| Route Path | Component / View | Description |
| :--- | :--- | :--- |
| `/` | `Home View` | Landing page featuring the Employee Portal hero banner and quick navigation button. |
| `/employee` | `EmployeeList` & `Filters` | Main employee directory displaying employee cards with real-time department filtering. |
| `/employees/:id` | `EmployeeDetail` | Detailed profile view for a selected employee, including personal details, company role, contact info, and assigned task statuses. |

---

## ✨ Features

- **Department Filtering:** Filter employees by departments (Engineering, Services, Accounting, Legal, Support, Human Resources, Sales, Marketing, or All).
- **Employee Cards & Profiles:** View avatar, full name, job title, and department at a glance.
- **Detailed Profile View:** Detailed contact information (Email, Phone, City), company info (Company Name, Department, Job Title), and personal info (Age).
- **Task Management / Todos:** Real-time fetch and rendering of tasks assigned to each employee with status indicators (Done / Pending).
- **Clean UI & Responsive Design:** Optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Routing:** React Router DOM (v7)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS3
- **Data Source:** DummyJSON API

---
##Screenshot
<img width="1465" height="830" alt="Screenshot 2026-10-17 at 10 34 15 PM" src="https://github.com/user-attachments/assets/f4f43e12-cbc9-4123-bfd9-c6f73d8819ba" />
<img width="1461" height="833" alt="Screenshot 2026-10-17 at 10 34 01 PM" src="https://github.com/user-attachments/assets/e779f92c-c17f-4df2-a2f7-7e4d6964765f" />

## 📂 Project Structure

```text
Assignment5/
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx             # Main router setup & layout
│   │   ├── EmployeeDetail.jsx  # Employee profile & task list view
│   │   ├── employee.jsx        # Employee grid list component
│   │   ├── filter.jsx          # Department filter dropdown component
│   │   ├── index.css           # Global stylesheets
│   │   └── main.jsx            # React root entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md


