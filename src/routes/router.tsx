// src/router.tsx
import {  createHashRouter } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import RootLayout from "../layouts/RootLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import StudentsList from "../pages/students/StudentsList";
import StudentDetail from "../pages/students/StudentsDetail";
import StudentForm from "../pages/students/StudentForm";
import Profile from "../pages/account/Profile";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

const router = createHashRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <RootLayout />
            </ProtectedRoute>
        ),
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
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "about",
                element: <About />,
            }
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
