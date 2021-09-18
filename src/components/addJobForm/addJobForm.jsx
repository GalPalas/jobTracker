import React from "react";

function AddJobForm() {
  return (
    <div
      className="modal fade"
      id="enrollJob"
      tabindex="-1"
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
                <label for="company-name" className="col-form-label">
                  Company Name:
                </label>
                <input type="text" className="form-control" id="company-name" />
              </div>
              <div className="mb-3">
                <label for="city-name" className="col-form-label">
                  City Name:
                </label>
                <input type="text" className="form-control" id="city-name" />
              </div>
              <div className="mb-3">
                <label for="role-name" className="col-form-label">
                  Role Name:
                </label>
                <input type="email" className="form-control" id="role-name" />
              </div>
              <div className="mb-3">
                <label for="link-job" className="col-form-label">
                  Link Job:
                </label>
                <input type="tel" className="form-control" id="link-job" />
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
            <button type="button" className="btn btn-dark ">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJobForm;
