import { useAuth } from "../../context/AuthContext";

export default function Profile() {
    const { user } = useAuth();

    if (!user) {
        return <div className="text-danger">Không tìm thấy thông tin người dùng.</div>;
    }

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Thông tin tài khoản</h4>
            </div>
            <div className="card-body">
                <div className="row g-3 align-items-center">
                    {/* Avatar (placeholder) */}
                    <div className="col-md-3 text-center">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff&size=128`}
                            alt="Avatar"
                            className="rounded-circle img-thumbnail"
                        />
                    </div>

                    {/* Thông tin */}
                    <div className="col-md-9">
                        <table className="table table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <th scope="row" style={{ width: "150px" }}>
                                        Tên người dùng:
                                    </th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email:</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Vai trò:</th>
                                    <td>{user.role || "Người dùng thường"}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ngày tham gia:</th>
                                    <td>{user.createdAt || "01/01/2025"}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Trạng thái:</th>
                                    <td>
                                        <span className="badge bg-success">Đang hoạt động</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
