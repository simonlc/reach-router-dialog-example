import React from 'react';
import { Location } from '@reach/router';

export const ScoreDialogContext = React.createContext();

const matchPath = (pathname, paths) =>
  paths.find(path => pathname.startsWith(path));

export function ScoreDialogProvider({ children, paths }) {
  return (
    <Location>
      {({ location, navigate }) =>
        matchPath(location.pathname, paths) &&
        location.state &&
        location.state.oldLocation ? (
          <ScoreDialogContext.Provider
            value={{
              oldLocation: location.state.oldLocation,
              location,
              navigate,
            }}
          >
            {children}
          </ScoreDialogContext.Provider>
        ) : (
          <ScoreDialogContext.Provider
            value={{
              location,
              navigate,
            }}
          >
            {children}
          </ScoreDialogContext.Provider>
        )
      }
    </Location>
  );
}
