// src/context/TaskContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import * as taskService from "./taskService.js";

const TaskContext = createContext();

function TaskProvider({ children }) {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch tasks on mount
	useEffect(() => {
		async function fetchTasks() {
			try {
				setLoading(true);
				const data = await taskService.getTasks();
				setTasks(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchTasks();
	}, []);

	async function handleAddTask(task) {
		const newTask = await taskService.addTask(task);
		setTasks((tasks) => [newTask, ...tasks]);
	}

	async function handleDeleteTask(id) {
		await taskService.deleteTask(id);
		setTasks((tasks) => tasks.filter((t) => t.id !== id));
	}

	async function handleUpdateTask(id, updatedFields) {
		const updatedTask = await taskService.updateTask(id, updatedFields);
		setTasks((tasks) => tasks.map((t) => (t.id === id ? updatedTask : t)));
	}

	function handleClearTasks() {
		setTasks([]);
	}

	return (
		<TaskContext.Provider
			value={{
				tasks,
				loading,
				error,
				onAddTask: handleAddTask,
				onDeleteTask: handleDeleteTask,
				onUpdateTask: handleUpdateTask,
				onClearTasks: handleClearTasks,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
}

function useTasks() {
	const context = useContext(TaskContext);
	if (context === undefined)
		throw new Error("useTasks must be used inside TaskProvider");
	return context;
}

export { TaskProvider, useTasks };
