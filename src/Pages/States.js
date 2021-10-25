import React from "react";

const States = () => {
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
                  <th>Name</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Edinburgh</td>
                </tr>
                <tr>
                  <td>Tokyo</td>
                </tr>
                <tr>
                  <td>San Francisco</td>
                </tr>
                <tr>
                  <td>Edinburgh</td>
                </tr>
                <tr>
                  <td>New York</td>
                </tr>
                <tr>
                  <td>New York</td>
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
