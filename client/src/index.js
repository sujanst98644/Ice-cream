import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import Home from './pages/home';
import Flavors from './pages/flavors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './pages/signin';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Signup from './pages/signup';
import Admin from './pages/Admin/Admin';
import Dashboard from './pages/Admin/dashboard';
import Users from './pages/Admin/users';
import Upload from './pages/Admin/upload';
import Settings from './pages/Admin/settings';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/flavors", element: <Flavors/>},
      {path:"/about", element: <About/>},
      {path:"/contact", element: <Contact/>},
      {path:'/cart', element: <Cart/>},
    ]
  },
  {
    path:"/signin",
    element: <Signin/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/Admin',
    element: <Admin/>,
    children:[
      {path: '/Admin/dashboard', element: <Dashboard/>},
      {path: '/Admin/users', element: <Users/>},
      {path: '/Admin/upload', element: <Upload/>},
      {path: '/Admin/settings', element: <Settings/>}
    ]
  },
  {
    path: '/user',
    element: <App/>
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);