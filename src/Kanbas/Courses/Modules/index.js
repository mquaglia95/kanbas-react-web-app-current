import ModuleList from "./ModuleList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Modules() {
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