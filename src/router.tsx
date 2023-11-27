import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import TopPage from "./components/TopPage"
import AddHostPage from "./components/AddHostPage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TopPage />,
        },
        {
            path: "/addHost",
            element: <AddHostPage />,
        },
    ]);

    return <RouterProvider router={router} />
}
