import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4 mb-5">Error 404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="lead">
        Sorry, this page does not exists!
        <br /> <Link to="/">Go Back to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
