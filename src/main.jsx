import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from '../Components/Main';
import Phones from '../Components/Phones';
import Phone from '../Components/Phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path: "/phone/:id",
        element: <Phone />,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
