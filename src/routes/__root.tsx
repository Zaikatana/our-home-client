import React from 'react';

import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <React.Fragment>
        <Outlet />
        <TanStackRouterDevtools />
      </React.Fragment>
    );
  },
});
