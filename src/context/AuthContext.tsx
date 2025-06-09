// src/context/AuthContext.tsx
import { createContext, useContext, useState, type ReactNode, useEffect } from "react";

interface User {
    name: string;
    email: string;
    role?: string;
    createdAt?: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Nếu muốn lưu user vào localStorage để giữ đăng nhập khi reload:
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Đây là ví dụ - bạn nên thay bằng API thật hoặc xác thực backend
        if (email === "admin" && password === "12345") {
            setUser({
                name: "Trần Đăng Khoa",
                email: "trandangkhoa020704@gmail.com",
                role: "Quản trị viên",
                createdAt: "2025-09-06",
            });
            // Lưu user vào localStorage để giữ đăng nhập khi reload
            localStorage.setItem(
                "user",
                JSON.stringify({
                    name: "Trần Đăng Khoa",
                    email: "trandangkhoa020704@gmail.com",
                    role: "Quản trị viên",
                    createdAt: "2025-09-06",
                })
            );
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
