import {
  Box,
  Button,
  Container,
  Flex,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title
} from "@mantine/core";

export default function CreateProjectForm() {
	return (
		<Container size="xl" py="xl">
			<Box maw={500} mx="auto" mt="100">
				<Stack spacing="lg">
					<Title order={2}>Create Project</Title>

					<TextInput
						label="Project Name"
						placeholder="Enter Project Name"
						radius="md"
					/>

					<Textarea
						label="Description"
						placeholder="Enter task details..."
						minRows={4}
						autosize
					/>

					<Select
						label="Assignee Employee"
						data={[
							{ value: "john", label: "John Doe" },
							{ value: "jane", label: "Jane Smith" },
							{ value: "michael", label: "Michael Johnson" },
						]}
					/>

					<Flex justify="flex-end" gap="sm" mt="md">
						<Button variant="default">Cancel</Button>
						<Button>Create Project</Button>
					</Flex>
				</Stack>
			</Box>
		</Container>
	);
}
