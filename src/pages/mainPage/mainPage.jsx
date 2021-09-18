import React from "react";
import JobLists from "components/jobLists/jobLists";

function MainPage() {
  return (
    <div className="container">
      <div className="add-job ">
        <button className="btn btn-warning float-end mt-3">Add New Job</button>
      </div>
      <div className="jobs-lists">
        <JobLists />
      </div>
    </div>
  );
}

export default MainPage;
