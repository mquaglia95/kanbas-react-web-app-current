import React from "react";
import CardLayout from "../CardLayout";

function Dashboard( 
  {courses, course, setCourses, setCourse, isEditing, setIsEditing, 
  addNewCourse, editCourse, deleteCourse, onUpdate}
  ) {

  return (
    <div className="wd-card-spacing">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <h6>Title</h6>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <h6>Number</h6>
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <h6>Start Date</h6>
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <h6>End Date</h6>
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button
          type="button"
          class="btn btn-success" 
          onClick={addNewCourse}>Add</button>
      <button 
          type="button"
          class="btn btn-primary"
          onClick={(e) => {
          e.preventDefault();
          onUpdate(course);
        }}>
        Update
      </button>

      <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid">
        {courses?.map((course) => (
          <CardLayout
            class="wd-card-spacing"
            key={course._id}
            courses={course}
            onDelete={deleteCourse}
            onEdit={editCourse}
            isEditing={isEditing}
            onEditPull={(editedCourse) => {
              setCourse(editedCourse);
              setIsEditing(true);
            }}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
