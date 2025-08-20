import "@mantine/core/styles.css";
import DashboardStats from "../../components/DashboardStats.jsx";
import EmployeeTable from "../../components/EmployeeTable.jsx";
import NavBar from "../../components/NavBar.jsx";
import ProjectTable from "../../components/ProjectTable.jsx";
export default function Dashboard() {
	return (
		<>
			<NavBar />
			<DashboardStats />
			<EmployeeTable />
			<ProjectTable />
		</>
	);
}
