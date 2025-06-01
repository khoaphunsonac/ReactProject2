import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { students } from "../../entity/data";

export default function StudentsChart() {
    const dataByClass = students.reduce<{ class: string; total: number }[]>((acc, curr) => {
        const found = acc.find((item) => item.class === curr.class);
        if (found) {
            found.total++;
        } else {
            acc.push({ class: curr.class, total: 1 });
        }
        return acc;
    }, []);

    return (
        <div className="container my-4">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title mb-4">📊 Biểu đồ số lượng sinh viên theo lớp</h2>
                    <div style={{ width: "100%", height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataByClass}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="class" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="total" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
