import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";

class routeHandler {
    static home = "/"
    static register = "/register"
}

export const router = createBrowserRouter([
    {
        path: routeHandler.home,
        element: <Home />
    },
    {
        path: routeHandler.register,
        element: <Register />
    }
]);