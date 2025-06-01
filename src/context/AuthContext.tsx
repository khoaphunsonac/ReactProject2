// src/context/AuthContext.tsx
import { createContext, useContext, useState,type ReactNode, useEffect } from "react";

interface User {
    username: string;
    // có thể thêm email, token, roles, ...
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

    const login = async (username: string, password: string) => {
        // MOCK: validate username/password
        // TODO: Thay bằng call API thật
        if (username === "admin" && password === "123456") {
            const loggedUser = { username };
            setUser(loggedUser);
            localStorage.setItem("user", JSON.stringify(loggedUser));
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
