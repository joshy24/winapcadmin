import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  getCandidates,
  createCandidate,
  updateCandidate,
  deleteCandidate,
} from "../Redux/Slices/candidatesSlice";
import { getPositions } from "../Redux/Slices/positionSlice";
import NaijaStates from "naija-state-local-government";
import $ from "jquery";

const Candidates = () => {
  const dispatch = useDispatch();
  const candidates = useSelector(({ candidates }) => candidates.data.items);
  // const states = useSelector(({ states }) => states.data);
  const positions = useSelector(({ positions }) => positions.data);
  const [lgas, setLgas] = useState([]);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    dispatch(getCandidates());
    dispatch(getPositions());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    id: "",
    state: "",
    constituency: "",
    lga: "",
    position: "",
    candidate_name: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    isEdit: false,
  });

  const allStates = NaijaStates.states();

  const toggleLGA = (state) => {
    setFormData({ ...formData, state });
    const getLgas = NaijaStates.lgas(state).lgas;
    setLgas(getLgas);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleChange = (e) => {
    let position = e.target.value;
    setFormData({ ...formData, position: position });
    if (
      position === "Senate" ||
      position === "House of Representatives" ||
      position === "State Assembly"
    ) {
      $(".lga").removeClass("d-none");
      $(".constituency").removeClass("d-none");
    } else {
      $(".lga").addClass("d-none");
      $(".constituency").addClass("d-none");
    }
  };

  const handleAdd = async () => {
    setLgas([]);
    setFormData({
      ...formData,
      state: "",
      constituency: "",
      id: "",
      lga: "",
      position: "",
      candidate_name: "",
      isEdit: false,
    });
  };

  const handleEdit = async (id) => {
    const { data } = await axios.get(
      `https://win-apc.herokuapp.com/api/politician/${id}`
    );

    setLgas([]);
    const getLgas = NaijaStates.lgas(data.state).lgas;
    setLgas(getLgas);

    if (
      data.position === "Senate" ||
      data.position === "House of Representatives" ||
      data.position === "State Assembly"
    ) {
      $(".lga").removeClass("d-none");
      $(".constituency").removeClass("d-none");
    } else {
      $(".lga").addClass("d-none");
      $(".constituency").addClass("d-none");
    }

    setFormData({
      ...formData,
      state: data.state,
      constituency: data.constituency,
      id: data._id,
      lga: data.lga,
      position: data.position,
      candidate_name: data.candidate_name,
      isEdit: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, isLoading: true });

    const createForm = new FormData();
    createForm.append("candidate_name", formData.candidate_name);
    createForm.append("image", file);
    createForm.append("state", formData.state);
    createForm.append("constituency", formData.constituency);
    createForm.append("lga", formData.lga);
    createForm.append("position", formData.position);

    dispatch(createCandidate(createForm));
    setTimeout(() => {
      setFormData({
        ...formData,
        state: "",
        constituency: "",
        position: "",
        candidate_name: "",
        isLoading: false,
        isError: false,
        isSuccess: true,
      });
      setLgas([]);
      // window.location.reload();
    }, 1000);
  };

  const handleCandidateEdit = (e, id) => {
    e.preventDefault();
    setFormData({ ...formData, isLoading: true });

    const createForm = new FormData();
    createForm.append("candidate_name", formData.candidate_name);
    // createForm.append('image', file);
    createForm.append("state", formData.state);
    createForm.append("constituency", formData.constituency);
    createForm.append("lga", formData.lga);
    createForm.append("position", formData.position);

    dispatch(updateCandidate({ id: id, content: createForm }));

    setTimeout(() => {
      setFormData({
        ...formData,
        state: "",
        constituency: "",
        position: "",
        candidate_name: "",
        isLoading: false,
        isError: false,
        isSuccess: true,
      });
      setLgas([]);
      window.location.reload();
    }, 4000);
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(deleteCandidate({ id }));
    window.location.reload();
  };
  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Candidates</h1>
        <button
          className="btn btn-primary mb-3 mt-2"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={handleAdd}
        >
          Add candidate
        </button>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Candidates List
            </h6>
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
                    <th>Constituency</th>
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
                    <th>Constituency</th>
                    <th>LGA</th>
                    <th className="text-center">Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {candidates.length > 0 ? (
                    candidates.map((candidate, index) => (
                      <tr key={candidate._id}>
                        <td>{index + 1}</td>
                        <td>{candidate.candidate_name}</td>
                        <td>{candidate.position}</td>
                        <td>{candidate.state}</td>
                        <td>{candidate.constituency !== undefined ? candidate.constituency : "None"}</td>
                        <td> {candidate.lga} </td>
                        <td className="text-center">
                          <span
                            onClick={() => handleEdit(candidate._id)}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            style={{ color: "green", cursor: "pointer" }}
                          >
                            Edit
                          </span>
                          <span style={{ marginLeft: 10, marginRight: 10 }}>
                            |
                          </span>
                          <span
                            onClick={(e) => handleRemove(e, candidate._id)}
                            style={{ color: "red", cursor: "pointer" }}
                          >
                            Remove
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colspan="6">No available data</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

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
                {formData.isEdit ? "Edit Candidate" : "Assign New Candidate"}
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
                    {formData.isEdit
                      ? "Candidate has been updated"
                      : "Candidate has been assigned"}
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
                <form className="form">
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
                  <div className="form-group">
                    <label> Position</label>
                    <select
                      className="form-control"
                      value={formData.position}
                      onChange={(e) => handleChange(e)}
                    >
                      <option>-- SELECT POSITION --</option>
                      {positions.map((position) => (
                        <option key={position._id} value={position.name}>
                          {" "}
                          {position.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="form-group">
                    <label> State</label>
                    <select
                      className="form-control"
                      value={formData.state}
                      onChange={(e) => toggleLGA(e.target.value)}
                    >
                      {allStates.map((state, index) => (
                        <option value={state} key={index}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group constituency d-none">
                    <label>Constituency</label>
                    <input
                      type="text"
                      placeholder="Candidate Constituency"
                      className="form-control"
                      value={formData.constituency}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          constituency: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group lga d-none">
                    <label>LGA</label>
                    <select
                      name="lga"
                      id="lga"
                      className="form-control select-lga"
                      value={formData.lga}
                      onChange={(e) =>
                        setFormData({ ...formData, lga: e.target.value })
                      }
                    >
                      {lgas.map((lga, index) => (
                        <option value={lga} key={index}>
                          {lga}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formData.isEdit ? (
                    <div></div>
                  ) : (
                    <div className="form-group">
                      <label>Candidate Photo</label>
                      <input
                        type="file"
                        placeholder="Candidate Name"
                        className="form-control"
                        onChange={handleFileChange}
                      />
                    </div>
                  )}
                  <div className="modal-footer">
                    {formData.isEdit ? (
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={(e) => handleCandidateEdit(e, formData.id)}
                      >
                        {!formData.isLoading
                          ? "Edit Candidate"
                          : "Editing Candidate..."}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={handleSubmit}
                      >
                        {!formData.isLoading
                          ? "Add Candidate"
                          : "Adding Candidate..."}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;
