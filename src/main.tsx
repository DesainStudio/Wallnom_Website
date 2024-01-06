import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainSide from "./routes/mainside";
import Anmelden from "./routes/anmelden";
import Register from './routes/register';
import Game from './routes/game/game';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSide />
  },
  {
    path: "/anmelden",
    element: <Anmelden />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/game",
    element: <Game />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
