// pages/students/StudentForm.tsx
import { useParams, useNavigate } from "react-router-dom";
import { students } from "../../entity/data";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Student } from "../../entity/student";

interface StudentFormData {
    name: string;
    gender: "male" | "female";
    class: string;
    birthday: string;
}

export default function StudentForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isEdit = Boolean(id);
    const existingStudent = students.find((s) => s.id === id);

    const [form, setForm] = useState<StudentFormData>(() =>
        existingStudent
            ? {
                  name: existingStudent.name,
                  gender: existingStudent.gender,
                  class: existingStudent.class,
                  birthday: existingStudent.birthday,
              }
            : {
                  name: "",
                  gender: "male",
                  class: "",
                  birthday: "",
              }
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (isEdit && id) {
            const index = students.findIndex((s) => s.id === id);
            if (index !== -1) {
                students[index] = { ...students[index], ...form };
                alert("✅ Cập nhật sinh viên thành công!");
            }
        } else {
            const newStudent: Student = {
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                ...form,
            };
            students.push(newStudent);
            alert("✅ Thêm sinh viên mới thành công!");
        }

        navigate("/students");
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title mb-4 text-center">
                                {isEdit ? "✏️ Chỉnh sửa sinh viên" : "➕ Thêm sinh viên mới"}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Họ tên</label>
                                    <input
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Họ tên"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Giới tính</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className="form-select"
                                        value={form.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="class" className="form-label">Lớp</label>
                                    <input
                                        id="class"
                                        name="class"
                                        className="form-control"
                                        placeholder="Lớp"
                                        value={form.class}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="birthday" className="form-label">Ngày sinh</label>
                                    <input
                                        id="birthday"
                                        name="birthday"
                                        type="date"
                                        className="form-control"
                                        value={form.birthday}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    {isEdit ? "Cập nhật" : "Thêm mới"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
