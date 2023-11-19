import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client"

import { findModulesForCourse, createModule } from "./client";

function ModuleList() {



  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const { courseId } = useParams();
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) => {
        console.log('Modules: ', modules);
        dispatch(setModules(modules));
      }
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);


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
            onClick={handleAddModule}>Add</button>
          <button
            type="button"
            class="btn btn-primary" 
            onClick={() => handleUpdateModule(module._id)}>Update</button><br/>
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
                onClick={() => handleDeleteModule(module._id)}>
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