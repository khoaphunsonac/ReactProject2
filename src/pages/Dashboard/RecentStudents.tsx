import { students } from "../../entity/data";

export default function RecentStudents() {
    const recent = [...students]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5);

    return (
        <div className="mt-4">
            <h2 className="mb-3">🆕 Sinh viên mới nhất</h2>
            <ul className="list-group">
                {recent.map((student) => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <strong>{student.name}</strong> ({student.class})
                        </span>
                        <span className="badge bg-primary rounded-pill">
                            {new Date(student.createdAt).toLocaleDateString()}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
