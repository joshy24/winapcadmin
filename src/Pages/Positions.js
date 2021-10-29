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

  useEffect(() => {
    dispatch(getPositions());
    console.log({ positionsLoading });
  }, []);

  const [positionsData, setPositionsData] = useState({
    name: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPosition({ name: positionsData }));
  };
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
            <h6 class="m-0 font-weight-bold text-primary">
              {!positionsLoading === "PENDING" ? (
                <div className="loading1"></div>
              ) : (
                "Position List"
              )}{" "}
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
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
                                dispatch(deletePosition(position._id))
                              }
                            >
                              Remove
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                ) : (
                  positions.message
                )}
              </table>
            </div>
          </div>
        </div>
      </div>

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
              {/* {error ? (
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  Upload failed
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : null} */}
              {positionsData.isSuccess ? (
                <div
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  Position has been added
                  <button
                    type="button"
                    class="close"
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
                <div class="modal-footer">
                  <button type="submit" class="btn btn-success">
                    Add Position
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
