import {
	Box,
	Button,
	Container,
	Flex,
	Select,
	Stack,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { useTasks } from "../hooks/TaskContext.jsx";

export default function AddTaskForm() {
	const { onAddTask } = useTasks();

	const [taskName, setTaskName] = useState("");
	const [description, setDescription] = useState("");
	const [assignee, setAssignee] = useState("");
	const [status, setStatus] = useState("");
	const [priority, setPriority] = useState("");
	const [dueDate, setDueDate] = useState(null);

	const handleSubmit = () => {
		const newTask = {
			task: taskName,
			description,
			assignee,
			status,
			priority,
			dueDate,
		};
		onAddTask(newTask);

		// reset form
		setTaskName("");
		setDescription("");
		setAssignee("");
		setStatus("");
		setPriority("");
		setDueDate(null);
	};

	return (
		<Box mt="110">
			<Container size="sm">
				<Stack spacing="lg" maw={500} w="100%">
					<Title order={2} ta="center">
						Add New Task
					</Title>

					<TextInput
						label="Task Name"
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
					/>

					<Textarea
						label="Description"
						placeholder="Enter task details..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						minRows={4}
						autosize
					/>

					<Select
						label="Assignee"
						data={[
							{ value: "john", label: "John Doe" },
							{ value: "jane", label: "Jane Smith" },
							{ value: "michael", label: "Michael Johnson" },
						]}
						value={assignee}
						onChange={(val) => setAssignee(val)}
					/>

					<Select
						label="Status"
						data={[
							{ value: "not started", label: "Not Started" },
							{ value: "in-progress", label: "In Progress" },
							{ value: "completed", label: "Completed" },
						]}
						value={status}
						onChange={(val) => setStatus(val)}
					/>

					<Select
						label="Priority"
						data={[
							{ value: "low", label: "Low" },
							{ value: "medium", label: "Medium" },
							{ value: "high", label: "High" },
						]}
						value={priority}
						onChange={(val) => setPriority(val)}
					/>

					<DateInput label="Due Date" value={dueDate} onChange={setDueDate} />

					<Flex justify="flex-end" gap="sm" mt="md">
						<Button variant="default">Cancel</Button>
						<Button onClick={handleSubmit}>Submit</Button>
					</Flex>
				</Stack>
			</Container>
		</Box>
	);
}
