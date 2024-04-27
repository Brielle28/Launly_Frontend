import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import Layout from "../src/Componenets/Dashboard/Layout.jsx"
import Dashboards from "../src/Componenets/Dashboard/Dashboards.jsx"
import OrderHistory from "./Componenets/Dashboard/OrderHistory.jsx";
import ProtectedRoute from "./Componenets/ProtectedRoute/ProtectedRoute.jsx";
import Logout from "./Componenets/Dashboard/Logout.jsx"
import BookWash from "./Componenets/Dashboard/BookWash.jsx"
import Summary from "./Componenets/Dashboard/Summary.jsx"
import Profile from "./Componenets/Dashboard/Profile.jsx";
import Paystack from "./Componenets/Paystack/Paystack.jsx";
import EmailVerification from "./Componenets/EmailVerification/EmailVerification.jsx";
import ResetPasswordPage from "./Componenets/ForgetPassword/ResetPasswordPage.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/verifyemail",
        element: <EmailVerification/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPasswordPage/>,
      },
      {
        path: "/resetpasswordpage",
        element: <ResetPasswordPage/>,
      },
      {
        path: "/dash",
        // element: <Layout/>,
        element:<ProtectedRoute><Layout/></ProtectedRoute>,
        children: [
          {
            index: true,
            element: <Dashboards />,
          },
          {
            path: "orderhistory",
            element: <OrderHistory/>,
          },
          {
            path: "bookawash",
            element: <BookWash/>,
          },
          {
            path: "bookawash/summary",
            element: <Summary/>
          },
          {
            path: "logout",
            element: <Logout/>,
          },
          {
            path: "bookawash/summary/paystack",
            element: <Paystack/>
          }
         
        ]
      },
    ],
  },
]);



const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter
