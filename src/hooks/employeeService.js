const API_URL = "http://localhost:4000/employees";

export async function getEmployees() {
	const res = await fetch(API_URL);
	if (!res.ok) throw new Error("Failed to fetch employees");
	return await res.json();
}

export async function addEmployee(employee) {
	const res = await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(employee),
	});
	if (!res.ok) throw new Error("Failed to add employee");
	return await res.json();
}

export async function updateEmployee(id, updates) {
	const res = await fetch(`${API_URL}/${id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(updates),
	});
	if (!res.ok) throw new Error("Failed to update employee");
	return await res.json();
}

export async function deleteEmployee(id) {
	const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
	if (!res.ok) throw new Error("Failed to delete employee");
}
