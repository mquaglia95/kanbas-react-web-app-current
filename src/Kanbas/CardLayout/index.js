import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


function CardLayout({ courses, onDelete, onEdit, isEditing, setIsEditing, onEditPull, onUpdate }) {
  const navigate = useNavigate();


  if (!courses) {
    return null;
  }

  const navigateToCoursePage = () => {
    // Use the history object to navigate to the course page
    navigate(`/Kanbas/Courses/${courses.number}/Home`);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div onClick={navigateToCoursePage} className="card-link">
      {/* <Link to={`/Kanbas/Courses/${courses.number}/modules`} className="card-link"> */}
        
          <img src="/images/Northeastern.png" className="card-img-top" alt="Course Logo" />
            <div className="card-body">
              <h5 className="card-title">{courses.name}</h5>
              <p className="card-text">{courses.number}</p>
              <p className="card-text">{`Start Date: ${courses.startDate}`}</p>
              <p className="card-text">{`End Date: ${courses.endDate}`}</p>
              <p>
                <FontAwesomeIcon icon={faBook} />
              </p>
            </div>
          </div>
          {/* </Link> */}
          {isEditing ? (
            <>
              <input
                value={courses.name}
                onChange={(e) => onEdit({ ...courses, name: e.target.value })}
              />
              <button
                onClick={() => {
                  onUpdate(courses);
                  setIsEditing(false);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                class="btn btn-warning" 
                onClick={() => onEditPull(courses)}>Edit</button>
              <button
                type="button"
                class="btn btn-danger" 
                onClick={() => onDelete(courses._id)}>Delete</button>
            </>
          )}
          </div>
        </div>
  );
}

export default CardLayout;