import { Button, Container, Flex, Paper, Table, Title } from "@mantine/core";

const elements = [
	{ position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
	{ position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
	{ position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
	{ position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
	{ position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

function ElementsTable() {
	const rows = elements.map((element) => (
		<Table.Tr key={element.name}>
			<Table.Td>{element.position}</Table.Td>
			<Table.Td>{element.name}</Table.Td>
			<Table.Td>{element.symbol}</Table.Td>
			<Table.Td>{element.mass}</Table.Td>
		</Table.Tr>
	));

	return (
		<Container size="lg" mt="xl">
			<Flex
				mih={50}
				gap="xl"
				justify="space-between"
				align="center"
				direction="row"
				wrap="wrap"
			>
				<Title order={1} mb="xl">
					Employees
				</Title>
				<Button variant="light" mb="xl" radius="lg">
					Add New Employee
				</Button>
			</Flex>
			<Paper shadow="md" p="xl" pb="md" withBorder radius="lg">
				<Table.ScrollContainer minWidth={800}>
					<Table
						highlightOnHover
						withColumnBorders
						striped
						verticalSpacing="md"
						horizontalSpacing="lg"
					>
						<Table.Thead>
							<Table.Tr>
								<Table.Th>Element position</Table.Th>
								<Table.Th>Element name</Table.Th>
								<Table.Th>Symbol</Table.Th>
								<Table.Th>Atomic mass</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>{rows}</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
			</Paper>
		</Container>
	);
}

export default ElementsTable;
