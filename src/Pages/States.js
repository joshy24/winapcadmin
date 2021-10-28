import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStates } from "../Redux/Slices/statesSlice";

const States = () => {
  const dispatch = useDispatch();
  const states = useSelector(({ states }) => states.data);
  const statesLoading = useSelector(({ states }) => states.loading);

  useEffect(() => {
    dispatch(getStates());
    console.log({ states: states.length });
  }, []);

  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">States</h1>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">States List</h6>
        </div>

        {statesLoading === "PENDING" ? (
          <h3 className="m-3 text-center">Loading...</h3>
        ) : (
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
                    <th style={{ width: 20 }}>S/N</th>
                    <th>Name</th>
                    <th style={{ width: 150 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {states.map((state, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{state.stateName}</td>
                      <td className="text-center">
                        <Link to="/lga" style={{ color: "green" }}>
                          View LGAs
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default States;
