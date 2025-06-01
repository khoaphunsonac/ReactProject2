// src/pages/account/Profile.tsx
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
    const { user, logout } = useAuth();

    return (
        <div className="container mt-5" style={{ maxWidth: 400 }}>
            <h2>Thông tin tài khoản</h2>
            <p>
                <strong>Tên đăng nhập:</strong> {user?.username}
            </p>
            <button className="btn btn-danger" onClick={logout}>
                Đăng xuất
            </button>
        </div>
    );
}
