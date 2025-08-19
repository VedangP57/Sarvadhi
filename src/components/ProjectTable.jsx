import { Button, Container, Flex, Paper, Table, Title } from "@mantine/core";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website with modern UI",
    assignee: "John Doe",
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Develop a mobile app for e-commerce",
    assignee: "Jane Smith",
  },
  {
    id: 3,
    name: "CRM Integration",
    description: "Integrate CRM with internal tools",
    assignee: "Michael Johnson",
  },
   {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website with modern UI",
    assignee: "John Doe",
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Develop a mobile app for e-commerce",
    assignee: "Jane Smith",
  },
  {
    id: 3,
    name: "CRM Integration",
    description: "Integrate CRM with internal tools",
    assignee: "Michael Johnson",
  },
];

export default function ProjectsTable() {
  const rows = projects.map((project) => (
    <Table.Tr key={project.id}>
      <Table.Td>{project.id}</Table.Td>
      <Table.Td>{project.name}</Table.Td>
      <Table.Td>{project.description}</Table.Td>
      <Table.Td>{project.assignee}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" mt="120" mb="120">
      <Flex
        mih={50}
        gap="xl"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Title order={1} mb="xl">
          Projects
        </Title>
        <Button variant="light" mb="xl" radius="xl">
       New Project
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
                <Table.Th>Project ID</Table.Th>
                <Table.Th>Project Name</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Assignee</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </Container>
  );
}

