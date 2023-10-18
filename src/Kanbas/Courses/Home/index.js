import ModuleList from "../Modules/ModuleList";

function Home() {
    return (
      <div className="container">
        <div className="row">
            <div className="col wd-gen-spacing">
                <ModuleList />
            </div>
            <div className="col">
                <button type="button" class="btn btn-secondary mb-2">Import Existing Content</button><br></br>
                <button type="button" class="btn btn-secondary mb-2">Import From Commons</button><br></br>
                <button type="button" class="btn btn-secondary mb-2">Choose Home Page</button><br></br>
                <button type="button" class="btn btn-secondary mb-2">View Course Stream</button><br></br>
                <button type="button" class="btn btn-secondary mb-2">New Announcement</button><br></br>
                <button type="button" class="btn btn-secondary mb-2">New Analytics</button><br></br>
                <button type="button" class="btn btn-secondary mb-2">View Course Notifications</button><br></br>
                
        </div>
      </div>
    </div>
    );
  }
  export default Home;