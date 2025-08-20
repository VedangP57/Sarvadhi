import { createContext, useContext, useEffect, useState } from "react";
import * as projectService from "./projectService.js";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchProjects() {
			try {
				setLoading(true);
				const data = await projectService.getProjects();
				setProjects(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchProjects();
	}, []);

	async function onAddProject(project) {
		const newProject = await projectService.addProject(project);
		setProjects((prev) => [newProject, ...prev]);
	}

	async function onDeleteProject(id) {
		await projectService.deleteProject(id);
		setProjects((prev) => prev.filter((p) => p.id !== id));
	}

	async function onUpdateProject(id, fields) {
		const updated = await projectService.updateProject(id, fields);
		setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)));
	}

	return (
		<ProjectContext.Provider
			value={{
				projects,
				loading,
				error,
				onAddProject,
				onDeleteProject,
				onUpdateProject,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
}

function useProjects() {
	const context = useContext(ProjectContext);
	if (!context)
		throw new Error("useProjects must be used inside ProjectProvider");
	return context;
}

export { ProjectProvider, useProjects };
