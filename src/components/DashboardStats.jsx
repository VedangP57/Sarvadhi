import { Container, Grid, Paper, Text, Title } from "@mantine/core";

export default function Dashboard() {
	return (
		<Container size="lg" py="xl" mt="lg">
			<Grid gutter="lg" mb="xl">
				<Grid.Col span={6}>
					<Paper
						withBorder
						shadow="md"
						radius="lg"
						p="xl"
						style={{ minHeight: 120 }}
					>
						<Text size="sm" c="dimmed">
							Total Projects
						</Text>
						<Title order={3}>12</Title>
					</Paper>
				</Grid.Col>

				<Grid.Col span={6}>
					<Paper
						withBorder
						shadow="md"
						radius="lg"
						p="xl"
						style={{ minHeight: 120 }}
					>
						<Text size="sm" c="dimmed">
							Total Employees
						</Text>
						<Title order={3}>25</Title>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	);
}
