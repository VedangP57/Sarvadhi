import { Button, Container, Flex, Group, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useAuth } from "../hooks/AuthContext.jsx";

export default function Navbar() {
	const { user, isAuthenticated, logout } = useAuth();

	// Conditional menu items based on role
	let menuItems = [];
	if (isAuthenticated && user) {
		if (user.email === "jack@example.com") {
			// Admin
			menuItems = ["Dashboard", "Employees", "Projects", "Task"];
		} else {
			// Employee
			menuItems = ["Projects", "Task"];
		}
	}

	return (
		<div style={{ borderBottom: "1px solid #eaeaea", background: "white" }}>
			<Container size="xl">
				<Flex justify="space-between" align="center" py="sm">
					{/* Left: Logo */}
					<Group>
						<img src="/36.svg" alt="Sarvadhi" style={{ height: 40 }} />
						<img src="/47.svg" alt="Sarvadhi" style={{ height: 40 }} />
					</Group>

					{/* Right: Menu + Buttons */}
					{isAuthenticated && (
						<Group spacing="xl" ml="xl">
							{/* Menu Items with hover underline */}
							<Group spacing={40} mr="lg">
								{menuItems.map((item) => (
									<Text
										key={item}
										fw={500}
										style={{
											cursor: "pointer",
											position: "relative",
											paddingBottom: "4px",
										}}
										className="nav-link"
									>
										{item}
									</Text>
								))}
							</Group>

							{/* Buttons */}
							<Group spacing="md">
								<Button variant="light" radius="md" onClick={logout}>
									Logout
								</Button>
								<Button variant="light" radius="md">
									<IconArrowLeft size={18} />
								</Button>
							</Group>
						</Group>
					)}
				</Flex>
			</Container>

			{/* Hover underline styles */}
			<style>
				{`
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: #228be6;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }
        `}
			</style>
		</div>
	);
}
