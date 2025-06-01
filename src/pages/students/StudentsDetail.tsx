// pages/students/StudentDetail.tsx
import { useParams, Link } from "react-router-dom";
import { students } from "../../entity/data";
import type { Student } from "../../entity/student";

export default function StudentDetail() {
    const { id } = useParams<{ id: string }>();
    const student = students.find((s: Student) => s.id === id);

    if (!student) {
        return <h2 className="text-danger mt-4">🚫 Không tìm thấy sinh viên</h2>;
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-4">👤 Chi tiết sinh viên</h2>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">
                            <strong>Họ tên:</strong> {student.name}
                        </li>
                        <li className="list-group-item">
                            <strong>Giới tính:</strong> {student.gender === "male" ? "Nam" : "Nữ"}
                        </li>
                        <li className="list-group-item">
                            <strong>Lớp:</strong> {student.class}
                        </li>
                        <li className="list-group-item">
                            <strong>Ngày sinh:</strong> {student.birthday}
                        </li>
                        <li className="list-group-item">
                            <strong>Ngày tạo:</strong> {new Date(student.createdAt).toLocaleString()}
                        </li>
                    </ul>
                    <Link to={`/students/edit/${student.id}`} className="btn btn-primary">
                        ✏️ Chỉnh sửa
                    </Link>
                </div>
            </div>
        </div>
    );
}
