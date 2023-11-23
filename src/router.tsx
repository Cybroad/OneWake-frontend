import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import TopPage from "./components/TopPage"

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TopPage />,
        }
    ]);

    return <RouterProvider router={router} />
}
