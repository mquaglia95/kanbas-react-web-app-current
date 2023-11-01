import { React, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
        <li className="list-group-item">
          <h4>Title</h4>
          <input 
            class="wd-module-input-title"
            value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            /><br/>
          <h5>Description</h5>
          <textarea 
            name="text" 
            rows="4"
            class="wd-module-input-description" 
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            /><br/>
          <button
            type="button"
            class="btn btn-success" 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button
            type="button"
            class="btn btn-primary" 
            onClick={() => dispatch(updateModule(module))}>Update</button><br/>
        </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-modules">
              <button
                type="button"
                class="btn btn-warning" 
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger" 
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;