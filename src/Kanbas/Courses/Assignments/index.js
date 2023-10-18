import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div class="container">
        <div class="row wd-gen-spacing">
          <div class="col-sm wd-search-size"><input type="text" class="form-control" placeholder="Search for Assignment"/></div>
          <div class="col-sm wd-search-size"></div>
          <div class="col-sm wd-buttons-right"><button type="button" class="btn btn-secondary"><FontAwesomeIcon icon={faPlus} /> Group</button>
          <button type="button" class="btn btn-danger" style={{ marginLeft: '10px' }}><FontAwesomeIcon icon={faPlus} /> Module</button></div>
        </div>
        <div class="row">
          <h2>Assignments for course {courseId}</h2>
          <div className="list-group">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item">
                {assignment.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
}
export default Assignments;