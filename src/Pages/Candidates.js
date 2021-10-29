import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCandidates, createCandidate } from "../Redux/Slices/candidatesSlice";

const Candidates = () => {
  const dispatch = useDispatch();
  const candidates = useSelector(({ candidates }) => candidates.data.items);

  useEffect(() => {
    dispatch(getCandidates());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    state: "",
    lga: "",
    position: "",
    party: "",
    firstname: "",
    lastname: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  const handleSubmit = (e) => {
    setFormData({ isLoading: true });
    e.preventDefault();

    setTimeout(() => {
      setFormData({ isError: true, isLoading: false });
    }, 4000);
    console.log(formData);
  };
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Candidates</h1>
        <button
          className="btn btn-primary mb-3 mt-2"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={() => {
            dispatch(
              createCandidate({
                firstname: formData.firstname,
                lastname: formData.lastname,
                party: formData.party,
                position: formData.position,
                state: formData.state,
                lga: formData.lga,
              })
            );
          }}
        >
          Add candidate
        </button>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Candidates List</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th style={{ width: 15 }}>S/N</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th style={{ width: 15 }}>S/N</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th className="text-center">Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {candidates.map((candidate, index) => (
                    <tr key={candidate._id}>
                      <td>{index + 1}</td>
                      <td>{`${candidate.lastname} ${candidate.firstname}`}</td>
                      <td>{candidate.position}</td>
                      <td>{candidate.state}</td>
                      <td> {candidate.lga} </td>
                      <td className="text-center">
                        <Link to="#" style={{ color: "green" }}>
                          Edit
                        </Link>
                        <span style={{ marginLeft: 10, marginRight: 10 }}>
                          |
                        </span>
                        <Link to="#" style={{ color: "red" }}>
                          Remove
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* add candidate modal doings  */}

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Assign New Candidate
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                {formData.isError ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    Upload failed
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                ) : null}
                {formData.isSuccess ? (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    Candidate has been assigned
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                ) : null}
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
                      <option>Ikeja</option>
                      <option>Lekki</option>
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
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      {!formData.isLoading
                        ? "Add Candidate"
                        : "Adding Candidate..."}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
