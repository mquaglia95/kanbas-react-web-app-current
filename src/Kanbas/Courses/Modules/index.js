// import ModuleList from "./ModuleList";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

// function Modules() {

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ModuleList from "./ModuleList";
import { setModules } from "./modulesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Modules() {
  const dispatch = useDispatch();
  const { courseId } = useParams(); // Assuming you are using React Router

  // Fetch modules data from your API when the component mounts
  useEffect(() => {
    fetch(`http://localhost:4000/api/courses/${courseId}/Modules`)
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the action to update the Redux store with the modules
        dispatch(setModules(data));
      })
      .catch((error) => {
        console.error("Error fetching modules:", error);
      });
  }, [dispatch, courseId]);

  return (
<div>
    <div className="d-flex justify-content-end align-items-center">
          <div class="col wd-gen-spacing">
            <button type="button" class="btn btn-secondary mx-2">Collapse All</button>
            <button type="button" class="btn btn-secondary mx-2">View Content</button>
  
            <div className="btn-group mx-2">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Publish All
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>Publish All</li>
                  <li>Publish All Items and Modules</li>
                  <li>Unpublish All</li>
                </ul>
                </div>
                <button type="button" class="btn btn-danger mx-2"><FontAwesomeIcon icon={faPlus}/>Module</button>
                </div>
                </div>
      <ModuleList />
    </div>
  );
}

export default Modules;