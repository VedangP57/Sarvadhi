import {
  Button,
  Center,
  Container,
  Flex,
  Group,
  Loader,
  Paper,
  Table,
  Title,
} from "@mantine/core";
import { useTasks } from "../hooks/TaskContext.jsx";

export default function TaskTable() {
	const { tasks, loading } = useTasks();

	return (
		<Container size="lg" mt="xl">
			<Flex justify="space-between" align="center" mb="xl">
				<Title order={1}>Tasks</Title>
				<Group>
					<Button variant="default">Not Started</Button>
					<Button variant="default">In Progress</Button>
					<Button variant="default">Completed</Button>
				</Group>
			</Flex>

			<Paper shadow="md" p="xl" pb="md" withBorder radius="lg">
				{loading ? (
					<Center py="lg">
						<Loader />
					</Center>
				) : (
					<Table.ScrollContainer minWidth={800}>
						<Table
							striped
							highlightOnHover
							withColumnBorders
							verticalSpacing="md"
							horizontalSpacing="lg"
						>
							<Table.Thead>
								<Table.Tr>
									<Table.Th>Task</Table.Th>
									<Table.Th>Assignee</Table.Th>
									<Table.Th>Due Date</Table.Th>
									<Table.Th>Status</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{tasks.map((t) => (
									<Table.Tr key={t.id}>
										<Table.Td>{t.task}</Table.Td>
										<Table.Td>{t.assignee}</Table.Td>
										<Table.Td>{t.due}</Table.Td>
										<Table.Td>
											<Button variant="default" size="xs">
												{t.status}
											</Button>
										</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</Table.ScrollContainer>
				)}
			</Paper>

			<Flex justify="space-between" align="center" mt="xl">
				<Button variant="default">Add Task</Button>
			</Flex>
			<Flex justify="flex-end" mt="md">
				<Group>
					<Button variant="default" color="gray" radius="md">
						Delete Project
					</Button>
					<Button radius="md">Save Changes</Button>
				</Group>
			</Flex>
		</Container>
	);
}
