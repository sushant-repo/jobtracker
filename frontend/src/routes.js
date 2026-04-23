import { createBrowserRouter, Outlet } from "react-router-dom";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import PageLayout from "./components/PageLayout";

var router = createBrowserRouter([
    {
        path: "/",
        Component: PageLayout,
        children: [
            {index: true, Component: Home},
            {path: "jobs/add", Component: AddJob}
        ]
    }
])

export default router;