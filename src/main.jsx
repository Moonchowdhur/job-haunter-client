import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';
// import Featuredetails from './components/Featuredetails/Featuredetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("jobs.json"),
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      // {
      //   path: "/details/:id",
      //   element: <Featuredetails></Featuredetails>,
        
      // },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
