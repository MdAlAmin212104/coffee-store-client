import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SingUp from './Components/SingUp/SingUp.jsx';
import SingIn from './Components/SingIn/SingIn.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://coffee-store-hh57clsq8-md-al-amin-islams-projects.vercel.app/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee/>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`https://coffee-store-hh57clsq8-md-al-amin-islams-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/singUp',
    element: <SingUp/>,
  },
  {
    path: '/singIn',
    element:<SingIn/>,

  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch(`https://coffee-store-hh57clsq8-md-al-amin-islams-projects.vercel.app/users`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
