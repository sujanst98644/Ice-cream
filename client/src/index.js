import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './components/signin/signin';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/signin",
    element: <Signin/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
