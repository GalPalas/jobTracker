import React from "react";
import JobLists from "components/jobLists/jobLists";
import AddJobForm from "components/addJobForm/addJobForm";

function MainPage() {
  return (
    <div className="container">
      <div className="add-job ">
        <button
          className="btn btn-warning float-end mt-3"
          data-bs-toggle="modal"
          data-bs-target="#enrollJob"
        >
          Add New Job
        </button>
      </div>
      <div className="jobs-lists">
        <JobLists />
        <AddJobForm />
      </div>
    </div>
  );
}

export default MainPage;
