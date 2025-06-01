import RecentStudents from "./RecentStudents";
import StatsOverview from "./StatsOverview";
import StudentsChart from "./StudentsChart";

export default function Dashboard() {
    return (
        <div className="container py-4">
            <h1 className="mb-4">🎓 Dashboard</h1>
            <div className="row mb-4">
                <div className="col-12">
                    <StatsOverview />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12 col-lg-8 mb-4 mb-lg-0">
                    <StudentsChart />
                </div>
                <div className="col-12 col-lg-4">
                    <RecentStudents />
                </div>
            </div>
        </div>
    );
}
