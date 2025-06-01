import { Link } from "react-router-dom";
import { students } from "../../entity/data";
import { useState } from "react";

export default function StudentsList() {
    const [list, setList] = useState(students);

    function handleDelete(id: string) {
        const confirmDelete = window.confirm("Bạn có chắc muốn xóa sinh viên này?");
        if (confirmDelete) {
            setList((prev) => prev.filter((student) => student.id !== id));
        }
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-3">📋 Danh sách sinh viên</h2>
            <Link to="/students/new" className="btn btn-primary mb-3">
                ➕ Thêm sinh viên mới
            </Link>
            <ul className="list-group">
                {list.map((student) => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <Link to={`/students/${student.id}`}>{student.name}</Link> - {student.class}
                        </span>
                        <div className="btn-group">
                            <Link to={`/students/edit/${student.id}`} className="btn btn-sm btn-outline-secondary">
                                Sửa
                            </Link>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(student.id)}>
                                Xóa
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
