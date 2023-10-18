import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Credentials", "Progress Reports (EAB Navigate)"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item wd-course-nav ${pathname.includes(link) ? "active": ""}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
