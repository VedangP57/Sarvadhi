import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { AuthProvider } from "./hooks/AuthContext.jsx";
import { TaskProvider } from "./hooks/TaskContext.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import { theme } from "./theme";

export default function App() {
	return (
		<>
			<MantineProvider theme={theme}>
				<AuthProvider>
					<TaskProvider>
            < Dashboard/>
						{/* <NavBar />
					<Login />
					<AddTaskForm />
					<AddEmployeeForm />
					<DashboardStats />
					<ProjectHeader />
					<TaskTable /> */}
					</TaskProvider>
				</AuthProvider>
			</MantineProvider>
		</>
	);
}
