import React from 'react';
import { Location } from '@reach/router';

export const DialogContext = React.createContext();

const matchPath = (pathname, paths) =>
  paths.find(path => pathname.startsWith(path));

export function DialogProvider({ children, paths }) {
  return (
    <Location>
      {({ location, navigate }) => {
        const values = { location, navigate };
        if (
          matchPath(location.pathname, paths) &&
          location.state &&
          location.state.oldLocation
        ) {
          values.oldLocation = location.state.oldLocation;
        }
        return (
          <DialogContext.Provider value={values}>
            {children}
          </DialogContext.Provider>
        );
      }}
    </Location>
  );
}
