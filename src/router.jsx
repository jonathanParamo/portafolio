import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App.jsx';
import Greeting from "./routes/Getting.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/greeting", element: <Greeting /> },

])