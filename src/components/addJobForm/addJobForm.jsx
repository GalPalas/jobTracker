import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewJob } from "store/trackerSlice";

function AddJobForm() {
  const [companyName, setCompanyName] = useState("");
  const [cityName, setCityName] = useState("");
  const [roleName, setRoleName] = useState("");
  const [linkJob, setLinkJob] = useState("");

  const dispatch = useDispatch();

  const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const handleForm = () => {
    dispatch(
      addNewJob({
        id: ID(),
        company_name: companyName,
        city_name: cityName,
        role_name: roleName,
        link: linkJob,
      })
    );
  };

  return (
    <div
      className="modal fade"
      id="enrollJob"
      tabIndex="-1"
      aria-labelledby="enrollJobLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header bg-warning">
            <h5 className="modal-title " id="enrollJobLabel">
              Add a new job to the list
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="company-name" className="col-form-label">
                  Company Name:
                </label>
                <input
                  type="text"
                  onChange={(event) => setCompanyName(event.target.value)}
                  className="form-control"
                  id="company-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city-name" className="col-form-label">
                  City Name:
                </label>
                <input
                  type="text"
                  onChange={(event) => setCityName(event.target.value)}
                  className="form-control"
                  id="city-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role-name" className="col-form-label">
                  Role Name:
                </label>
                <input
                  type="text"
                  onChange={(event) => setRoleName(event.target.value)}
                  className="form-control"
                  id="role-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="link-job" className="col-form-label">
                  Link Job:
                </label>
                <input
                  type="text"
                  onChange={(event) => setLinkJob(event.target.value)}
                  className="form-control"
                  id="link-job"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
              onClick={handleForm}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJobForm;
