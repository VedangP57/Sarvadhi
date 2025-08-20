const API_URL = "http://localhost:4000/projects";

export async function getProjects() {
	const res = await fetch(API_URL);
	if (!res.ok) throw new Error("Failed to fetch projects");
	return await res.json();
}

export async function addProject(project) {
	const res = await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(project),
	});
	if (!res.ok) throw new Error("Failed to add project");
	return await res.json();
}

export async function updateProject(id, updates) {
	const res = await fetch(`${API_URL}/${id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(updates),
	});
	if (!res.ok) throw new Error("Failed to update project");
	return await res.json();
}

export async function deleteProject(id) {
	const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
	if (!res.ok) throw new Error("Failed to delete project");
}
