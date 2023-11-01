import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function CardLayout({ courses, onDelete, onEdit, isEditing, setIsEditing, onEditPull, onUpdate }) {
  if (!courses) {
    return null;
  }

  return (
    <div className="col">
      <div className="card h-100">
      <Link to={`/Kanbas/Courses/${courses._id}`} className="card-link">
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
          </Link>
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