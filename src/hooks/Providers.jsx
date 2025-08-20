import { AuthProvider } from "./AuthContext";
import { EmployeeProvider } from "./EmployeeContext";
import { ProjectProvider } from "./ProjectContext";
import { TaskProvider } from "./TaskContext";

export function AppProviders({ children }) {
	return (
		<AuthProvider>
			<TaskProvider>
				<EmployeeProvider>
					<ProjectProvider>{children}</ProjectProvider>
				</EmployeeProvider>
			</TaskProvider>
		</AuthProvider>
	);
}
