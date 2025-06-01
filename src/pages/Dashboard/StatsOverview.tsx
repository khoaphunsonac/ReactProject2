import { students } from "../../entity/data";

export default function StatsOverview() {
    const total = students.length;
    const totalMale = students.filter((s) => s.gender === "male").length;
    const totalFemale = students.filter((s) => s.gender === "female").length;

    return (
        <div className="row my-3">
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <strong>Tổng số sinh viên:</strong> {total}
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <strong>Nam:</strong> {totalMale}
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <strong>Nữ:</strong> {totalFemale}
                    </div>
                </div>
            </div>
        </div>
    );
}
