import React from 'react'

const Donations = () => {
    return (
        <div>
          <div class="container-fluid">
          <button
          class="btn btn-primary mb-3 mt-2"
          disabled
        >
          Total money donated $75,000.00
        </button>
            <h1 class="h3 mb-2 text-gray-800">Donations</h1>
    
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Donors List</h6>
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
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                      <th>Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Date</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Tonye Greene</td>
                        <td>ellys@gmail.com</td>
                        <td>$50,000.00</td>
                        <td>12/12/2021</td>
                      </tr>
                      <tr>
                        <td>Anon</td>
                        <td>Anon</td>
                        <td>$23,000.00</td>
                        <td>12/12/2021</td>
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

export default Donations
