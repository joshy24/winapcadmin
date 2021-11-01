import React from "react";
import DONATIONS from "../Helpers/donations";

const Donations = () => {


  return (
    <div>
      <div className="container-fluid">
        <button className="btn btn-primary mb-3 mt-2" disabled>
          Total money donated $75,000.00
        </button>
        <h1 className="h3 mb-2 text-gray-800">Donations</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Donors List</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th style={{ width: 15 }}></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Donating to</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th style={{ width: 15 }}></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Donating to</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </tfoot>
                <tbody>
                  {DONATIONS.map((donation, index) => (
                    <tr key={donation.id}>
                      <td>{index + 1}</td>
                      <td>{donation.name}</td>
                      <td>{donation.email}</td>
                      <td>{donation.position}</td>
                      <td>{donation.state}</td>
                      <td>{!donation.lga ? "-" : donation.lga}</td>
                      <td>{donation.amount.toLocaleString()}</td>
                      <td>{donation.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
