import {
	Button,
	Center,
	Container,
	Flex,
	Loader,
	Paper,
	Table,
	Title,
} from "@mantine/core";
import { useProjects } from "../hooks/ProjectContext.jsx";

export default function ProjectsTable() {
	const { projects, loading } = useProjects();

	return (
		<Container size="lg" mt="120" mb="120">
			<Flex justify="space-between" align="center" mb="xl">
				<Title order={1}>Projects</Title>
				<Button variant="light" radius="xl">
					New Project
				</Button>
			</Flex>

			<Paper shadow="md" p="xl" withBorder radius="lg">
				{loading ? (
					<Center py="lg">
						<Loader />
					</Center>
				) : (
					<Table.ScrollContainer minWidth={800}>
						<Table striped highlightOnHover withColumnBorders>
							<Table.Thead>
								<Table.Tr>
									<Table.Th>ID</Table.Th>
									<Table.Th>Name</Table.Th>
									<Table.Th>Description</Table.Th>
									<Table.Th>Assignee</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{projects.map((p) => (
									<Table.Tr key={p.id}>
										<Table.Td>{p.id}</Table.Td>
										<Table.Td>{p.name}</Table.Td>
										<Table.Td>{p.description}</Table.Td>
										<Table.Td>{p.assignee}</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</Table.ScrollContainer>
				)}
			</Paper>
		</Container>
	);
}
