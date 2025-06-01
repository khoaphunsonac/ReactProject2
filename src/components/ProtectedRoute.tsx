// src/components/ProtectedRoute.tsx
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { type ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        // Nếu chưa login, redirect tới trang /login, lưu lại vị trí đang truy cập
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
