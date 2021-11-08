import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createPosition,
  deletePosition,
  getPositions,
} from "../Redux/Slices/positionSlice";

const Positions = () => {
  const dispatch = useDispatch();
  const positions = useSelector(({ positions }) => positions.data);
  const positionsLoading = useSelector(({ positions }) => positions.loading);
  const positionError = useSelector(({ positions }) => positions.error);
  const positionMessage = useSelector(({ positions }) => positions.successMessage);

const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  const [positionsData, setPositionsData] = useState({
    name: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(createPosition({ name: positionsData }));
    setTimeout(() => {
      window.location.reload()
      setLoading(false);
    }, 5000);
  };
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Positions</h1>
        <button
          className="btn btn-primary mb-3 mt-2"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add Positions
        </button>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {!positionsLoading === "PENDING" ? (
                <div className="loading1"></div>
              ) : (
                "Position List"
              )}{" "}
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
                {positions.length > 1 ? (
                  <>
                    <thead>
                      <tr>
                        <th style={{ width: 15 }}>S/N</th>
                        <th>Position</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th style={{ width: 15 }}></th>
                        <th>Position</th>
                        <th style={{ width: 15 }}></th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {positions.map((position, index) => (
                        <tr key={position.id}>
                          <td>{index + 1}</td>
                          <td>{position.name}</td>
                          <td>
                            <Link
                              to="#"
                              style={{ color: "red" }}
                              onClick={() =>
                                {dispatch(deletePosition(position._id))
                                  setTimeout(() => {
                                    window.location.reload()
                                  }, 1000);
                                }
                              }
                            >
                              Remove
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                ) : 
                  null
                }
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
                Add New Positions
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
              {positionError ? (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  {positionError}
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
              {positionMessage ? (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  {positionMessage}
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
                  <label>Positions Name</label>
                  <input
                    type="text"
                    placeholder="Positions Name"
                    className="form-control"
                    value={positionsData.position}
                    onChange={(e) => setPositionsData(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    
                    {loading ? 'Please wait...' : 'Add Position'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
