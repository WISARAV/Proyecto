// frontend/src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      <Sidebar />

      <div style={{ marginLeft: '250px', padding: '2rem', width: '100%' }}>
        <Navbar />

        <h2 className="mb-4">Overview</h2>

        <div className="row g-4 mb-4">
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Students" value="50055" subtitle="Total students enrolled" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Awards" value="50+" subtitle="Awards won this year" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Revenue" value="$505" subtitle="Monthly revenue" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Teachers" value="123" subtitle="Active teachers" />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-7">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Progress Overview</div>
              <div className="card-body">
                <canvas id="progressChart" height="100"></canvas>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Star Students</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Marks</th>
                      <th>Percentage</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PRE2209</td>
                      <td>John Smith</td>
                      <td>1185</td>
                      <td>98%</td>
                      <td>2019</td>
                    </tr>
                    <tr>
                      <td>PRE1245</td>
                      <td>Jolie Hoskins</td>
                      <td>1195</td>
                      <td>99.5%</td>
                      <td>2018</td>
                    </tr>
                    <tr>
                      <td>PRE1625</td>
                      <td>Pennington Joy</td>
                      <td>1196</td>
                      <td>99.6%</td>
                      <td>2017</td>
                    </tr>
                    <tr>
                      <td>PRE2516</td>
                      <td>Millie Marsden</td>
                      <td>1187</td>
                      <td>98.2%</td>
                      <td>2016</td>
                    </tr>
                    <tr>
                      <td>PRE2209</td>
                      <td>John Smith</td>
                      <td>1185</td>
                      <td>98%</td>
                      <td>2015</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;