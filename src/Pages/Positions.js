import React from "react";
import { Link } from "react-router-dom";

const Positions = () => {
  return (
    <div>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Positions</h1>
        <button
          class="btn btn-primary mb-3 mt-2"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add Positions
        </button>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Positions List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Position</th>
                    <th></th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Position</th>
                    <th style={{width:15}}></th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Governor</td>
                    <td>
                      <Link to="#" style={{ color: "red" }}>
                        Remove
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* add candidate modal doings  */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Positions
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="form">
                <div className="form-group">
                <label>Positions Name</label>
                  <input
                    type="text"
                    placeholder="Positions Name"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success">
                Add Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
