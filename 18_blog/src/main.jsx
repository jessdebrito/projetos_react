import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Páginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';


import './index.css';


const router = createBrowserRouter([
  {
    element: < App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        new: "/new",
        element: <NewPost />
      },

    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
