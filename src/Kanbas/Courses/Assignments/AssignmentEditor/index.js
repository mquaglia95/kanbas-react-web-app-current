import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="container">
      <div class="row wd-gen-spacing">
        <h2>Assignment Name</h2>
      </div>
      <div class="row">
        <input value={assignment.title}
              className="form-control mb-2" />
      </div>
      <div class="row">
        <div class="col-sm wd-buttons-right">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2" style={{marginLeft: '10px'}}>
          Save
        </button>
        </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;