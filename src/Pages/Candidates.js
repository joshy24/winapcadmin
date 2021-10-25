import React, { useState } from "react";
import { Link } from "react-router-dom";

const Candidates = () => {
  const [formData, setFormData] = useState({
    state: "",
    lga: "",
    position: "",
    candidate_name: "",
    isLoading: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    console.log('Hello');
  };
  return (
    <div>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Candidates</h1>
        <button
          class="btn btn-primary mb-3 mt-2"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add candidate
        </button>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Candidates List</h6>
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
                    <th>Name</th>
                    <th>Position</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Tonye Greene</td>
                    <td>Governor</td>
                    <td>Lagos</td>
                    <td> - </td>
                    <td>
                      <Link to="#" style={{ color: "green" }}>
                        Edit
                      </Link>
                      |
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
                Assign New Candidate
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
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> State</label>
                  <select
                    className="form-control"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  >
                    <option>-- SELECT STATE -- </option>
                    <option>Abuja</option>
                    <option>Anambra</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> LGA</label>
                  <select
                    className="form-control"
                    value={formData.lga}
                    onChange={(e) =>
                      setFormData({ ...formData, lga: e.target.value })
                    }
                  >
                    <option>-- SELECT LGA -- </option>
                    <option>Abuja</option>
                    <option>Anambra</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Position</label>
                  <select
                    className="form-control"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                  >
                    <option>-- SELECT POSITION -- </option>
                    <option>Governor</option>
                    <option>President</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Candidate Name</label>
                  <input
                    type="text"
                    placeholder="Candidate Name"
                    className="form-control"
                    value={formData.candidate_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        candidate_name: e.target.value,
                      })
                    }
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <input type="submit" class="btn btn-success"   value="Add Candidate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
