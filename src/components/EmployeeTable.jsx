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
import { useEmployees } from "../hooks/EmployeeContext.jsx";

export default function EmployeesTable() {
	const { employees, loading } = useEmployees();

	return (
		<Container size="lg" mt="xl">
			<Flex justify="space-between" align="center" mb="xl">
				<Title order={1}>Employees</Title>
				<Button variant="light" radius="lg">
					Add New Employee
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
									<Table.Th>Role</Table.Th>
									<Table.Th>Email</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{employees.map((e) => (
									<Table.Tr key={e.id}>
										<Table.Td>{e.id}</Table.Td>
										<Table.Td>{e.name}</Table.Td>
										<Table.Td>{e.role}</Table.Td>
										<Table.Td>{e.email}</Table.Td>
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
