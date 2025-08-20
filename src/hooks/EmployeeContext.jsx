import { createContext, useContext, useEffect, useState } from "react";
import * as employeeService from "./employeeService.js";

const EmployeeContext = createContext();

function EmployeeProvider({ children }) {
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchEmployees() {
			try {
				setLoading(true);
				const data = await employeeService.getEmployees();
				setEmployees(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchEmployees();
	}, []);

	async function onAddEmployee(employee) {
		const newEmployee = await employeeService.addEmployee(employee);
		setEmployees((prev) => [newEmployee, ...prev]);
	}

	async function onDeleteEmployee(id) {
		await employeeService.deleteEmployee(id);
		setEmployees((prev) => prev.filter((e) => e.id !== id));
	}

	async function onUpdateEmployee(id, fields) {
		const updated = await employeeService.updateEmployee(id, fields);
		setEmployees((prev) => prev.map((e) => (e.id === id ? updated : e)));
	}

	return (
		<EmployeeContext.Provider
			value={{
				employees,
				loading,
				error,
				onAddEmployee,
				onDeleteEmployee,
				onUpdateEmployee,
			}}
		>
			{children}
		</EmployeeContext.Provider>
	);
}

function useEmployees() {
	const context = useContext(EmployeeContext);
	if (!context)
		throw new Error("useEmployees must be used inside EmployeeProvider");
	return context;
}

export { EmployeeProvider, useEmployees };
