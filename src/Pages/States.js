import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStates } from "../Redux/Slices/statesSlice";

const States = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getStates());
  }, []);


  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">States</h1>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">States List</h6>
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
                  <th style={{ width: 20 }}>S/N</th>
                  <th>Name</th>
                  <th style={{ width: 150 }}></th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Edinburgh</td>
                  <td className="text-center">
                    <Link to="/lga" style={{ color: "green" }}>
                      View LGAs
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Tokyo</td>
                  <td className="text-center">
                    <Link to="/lga" style={{ color: "green" }}>
                      View LGAs
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
