// pages/students/StudentsList.tsx
import { Link } from "react-router-dom";
import { students } from "../../entity/data";
import type { Student } from "../../entity/student";

export default function StudentsList() {
    return (
        <div className="container py-4">
            <h2 className="mb-4">📋 Danh sách sinh viên</h2>
            <Link to="/students/new" className="btn btn-primary mb-3">
                ➕ Thêm sinh viên mới
            </Link>
            <ul className="list-group">
                {students.map((student: Student) => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
                        <span className="badge bg-secondary">{student.class}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
