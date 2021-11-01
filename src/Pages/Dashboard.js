import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDonations } from "../Redux/Slices/donationSlice";
import { getCandidates } from "../Redux/Slices/candidatesSlice";
import { getPositions } from "../Redux/Slices/positionSlice";


const Dashboard = () => {

  const dispatch = useDispatch();
  const donations = useSelector(({ donations }) => donations.data);

  const candidates = useSelector(({ candidates }) => candidates.data.items);

  const positions = useSelector(({ positions }) => positions.data);

  let sizeOfDonor = donations.length;
  let sizeOfCandidate = candidates.length;
  let sizeOfPosition = positions.length;

  useEffect(() => {
    dispatch(getDonations());
    dispatch(getCandidates());
    dispatch(getPositions());
  }, [dispatch]);


  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <Link
            to="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
          </Link>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Donations
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      No. of Political Positions
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {sizeOfPosition}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      No. of Candidates
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{sizeOfCandidate}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      No. of Donators
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{sizeOfDonor}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <th>Name</th>
                  <th>Position</th>
                  <th>State</th>
                  <th>LGA</th>
                  <th className="text-center" >Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>State</th>
                  <th>LGA</th>
                  <th className="text-center">Action</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tonye Greene</td>
                  <td>Governor</td>
                  <td>Lagos</td>
                  <td> - </td>
                  <td className="text-center">
                   <div>
                   <Link to="#" style={{ color: "green" }}>
                    <i className="fas fa-fw fa-edit" aria-hidden="true"></i>
                    </Link>
                    <span style={{marginRight:10,marginLeft:10}}>|</span>
                    <Link to="#" style={{ color: "red" }}>
                    <i className="fas fa-fw fa-trash" aria-hidden="true"></i>
                    </Link>
                   </div>
                  </td>
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

export default Dashboard;
