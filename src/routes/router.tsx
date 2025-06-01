import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import StudentsList from "../pages/students/StudentsList";
import NotFound from "../pages/NotFound";
import StudentDetail from "../pages/students/StudentsDetail";
import StudentForm from "../pages/students/StudentForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, // layout chính
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "students",
                children: [
                    {
                        index: true,
                        element: <StudentsList />,
                    },
                    {
                        path: ":id",
                        element: <StudentDetail />,
                    },
                    {
                        path: "new",
                        element: <StudentForm />,
                    },
                    {
                        path: "edit/:id",
                        element: <StudentForm />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
