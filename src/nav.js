import React from 'react';
import { Link, Location } from '@reach/router';

export default function Nav() {
  return (
    <Location>
      {({ location }) => (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/page/1">Page 1</Link>
          <Link to="/page/2">Page 2</Link>
          <Link to="/page/3">Page 3</Link>
          <Link
            state={{
              oldLocation: { ...JSON.parse(JSON.stringify(location)) },
            }}
            to="/login"
          >
            Login
          </Link>
        </div>
      )}
    </Location>
  );
}
