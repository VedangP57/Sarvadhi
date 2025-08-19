import {
	Avatar,
	AvatarGroup,
	Button,
	Container,
	Flex,
	Group,
	Stack,
	Text,
	Title,
} from "@mantine/core";

export default function ProjectHeader() {
	return (
		<Container size="lg" mt="xl">
			<Stack spacing="lg">
				{/* Top Section: Title + Buttons */}
				<Flex justify="space-between" align="center">
					<Stack spacing={4}>
						<Title order={2}>Project: Website Redesign</Title>
						<Text c="dimmed" size="sm">
							Revamp the company website to improve user experience and
							engagement.
						</Text>
					</Stack>

					<Group>
						<Button variant="default">Edit Project</Button>
						<Button variant="default">Add Task</Button>
					</Group>
				</Flex>

				{/* Employees Section */}
				<Title order={4}>Assigned Employees</Title>
				<AvatarGroup spacing="sm">
					<Avatar
						src="https://randomuser.me/api/portraits/men/32.jpg"
						radius="xl"
					/>
					<Avatar
						src="https://randomuser.me/api/portraits/women/44.jpg"
						radius="xl"
					/>
					<Avatar
						src="https://randomuser.me/api/portraits/men/12.jpg"
						radius="xl"
					/>
					<Avatar
						src="https://randomuser.me/api/portraits/men/56.jpg"
						radius="xl"
					/>
					<Avatar
						src="https://randomuser.me/api/portraits/women/21.jpg"
						radius="xl"
					/>
				</AvatarGroup>
			</Stack>
		</Container>
	);
}
