import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";
import App from "../App";
const AuthLayout = () => {
  return <Outlet />;
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <App />,
        path: "/",
      },
    ],
  },
]);
