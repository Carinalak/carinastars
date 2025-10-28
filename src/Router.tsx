//import { Layout } from "./pages/Layout";
//import { NotFound } from "./pages/NotFound";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { News } from "./pages/News";
import { Music } from "./pages/Music";
import { Contact } from "./pages/Contact";
import { SingleLpPage } from "./components/music/SingleLpPage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <News></News>,
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
