import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navber from '../navber/Navber';
import Home from '../Home/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home> ,
    },
  ]);

export default router;