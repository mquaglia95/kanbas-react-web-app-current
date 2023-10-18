import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function CardLayout({ course }) {
  return (
    <Link to={`/Kanbas/Courses/${course._id}`} className="col">
      <div className="card h-100">
        <img src="/images/Northeastern.png" className="card-img-top" alt="Course Logo" />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{course.number}</p>
          <p className="card-text">{`Start Date: ${course.startDate}`}</p>
          <p className="card-text">{`End Date: ${course.endDate}`}</p>
          
          <p>
          <FontAwesomeIcon icon={faBook}/>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardLayout;