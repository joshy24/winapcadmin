import React from "react";

const Lga = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Local Govenment Areas</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              (State name) LGA List
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
                    <th>LGA</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S/N</th>
                    <th>LGA</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Bonny</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lga;
