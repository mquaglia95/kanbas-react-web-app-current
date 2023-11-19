import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css"
import { useState, useEffect } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  const deleteCourse = async (courseID) => {
    const response = await axios.delete(
      `${URL}/${courseID}`
    );
    setCourses(courses.filter((c) => c._id !== courseID));
  };

  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const [isEditing, setIsEditing] = useState(false);


  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const editCourse = (edCourse) => {
  //   setCourses((currentCourse) =>
  //     currentCourse.map((c) => (c._id === edCourse._id ? edCourse : c))
  //   );
  // };

  // const onUpdate = (updatedCourse) => {
  //   setCourses((currentCourses) =>
  //     currentCourses.map((c) => (c._id === updatedCourse._id ? updatedCourse : c))
  //   );
  //   setIsEditing(false);
  // };

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
              addNewCourse={addCourse}
              deleteCourse={deleteCourse}
              onUpdate={updateCourse}
              setCourse={setCourse}
              setIsEditing={setIsEditing}
              />} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;