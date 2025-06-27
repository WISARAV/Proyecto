import React from 'react';

const DashboardCard = ({ title, value, subtitle }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h2 className="card-text">{value}</h2>
        <small className="text-muted">{subtitle}</small>
      </div>
    </div>
  );
};

export default DashboardCard;