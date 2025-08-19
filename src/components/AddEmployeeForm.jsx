import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

export default function AddEmployeeForm() {
	return (
		<Container size="xl" py="xl">
			<Box maw={500} mx="auto" mt="100">
				<Stack spacing="lg">
					<Title order={1}>Add New Employee</Title>

					<TextInput
						label="Name"
						placeholder="Enter employee's full name"
						radius="md"
					/>

					<TextInput
						label="Email"
						placeholder="Enter employee's email address"
						radius="md"
					/>

					<TextInput
						label="Department"
						placeholder="Enter employee's department"
						radius="md"
					/>

					<TextInput
						label="Role"
						placeholder="Enter employee's role"
						radius="md"
					/>
					<Flex justify="flex-end" gap="sm" mt="md">
						<Button variant="default">Cancel</Button>
						<Button>Add Employee</Button>
					</Flex>
				</Stack>
			</Box>
		</Container>
	);
}
