import React from "react";
import db from "../Database";
import CardLayout from "../CardLayout";

function Dashboard() {
    const courses = db.courses;
    return (
      <div class="wd-card-spacing">
        <h1>Dashboard</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid">
          {courses.map((course) => (
            <CardLayout key={course._id} course={course} />
          ))}
        </div>
      </div>
    );
  }
export default Dashboard;