import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css"
import { useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const [isEditing, setIsEditing] = useState(false);

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const editCourse = (edCourse) => {
    setCourses((currentCourse) =>
      currentCourse.map((c) => (c._id === edCourse._id ? edCourse : c))
    );
  };

  const onUpdate = (updatedCourse) => {
    setCourses((currentCourses) =>
      currentCourses.map((c) => (c._id === updatedCourse._id ? updatedCourse : c))
    );
    setIsEditing(false);
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div>
          <KanbasNavigation />
        </div>
        <div className="wd-main-content-spacing">
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard 
              courses={courses}
              course={course}
              setCourses={setCourses}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              onUpdate={onUpdate}
              setCourse={setCourse}
              setIsEditing={setIsEditing}/>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;