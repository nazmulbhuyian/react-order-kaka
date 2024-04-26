import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/signin/Signin";
import NotFound from "../shared/notFound/NotFound";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Signin />,
    },
    {
        path: "/home",
        element:
            <Main />
        ,
        errorElement: <NotFound />,
        children: [
            {
                path: "/home",
                element: <Home />,
            }
        ],
    },
]);

export default router;