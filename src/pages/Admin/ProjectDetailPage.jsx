import "@mantine/core/styles.css";
import NavBar from "../../components/NavBar.jsx";
import ProjectHeader from "../../components/ProjectHeader.jsx";
import TaskTable from "../../components/TaskTable.jsx";

export default function ProjectDetailPage() {
	return (
		<>
			<NavBar />
			<ProjectHeader />
			<TaskTable />
		</>
	);
}
