import { createHashRouter } from "react-router-dom";
//import { Layout } from "./pages/Layout";
//import { NotFound } from "./pages/NotFound";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Music } from "./pages/Music";
import { Contact } from "./pages/Contact";
import { SingleLpPage } from "./components/music/SingleLpPage";


export const router = createHashRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/music",
                element: <Music></Music>,
            },
            { path: "/music/:slug", element: <SingleLpPage /> },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },

        ],
    },
]);
