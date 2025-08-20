"use client";
import {
	Button,
	Container,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext.jsx";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = () => {
		const result = login(email, password);
		if (!result.success) {
			setError(result.message);
		} else {
			setError("");
			setEmail("");
			setPassword("");
			if (result.user?.role === "admin") {
				navigate("/admin/dashboard");
			} else {
				navigate("/employee/dashboard");
			}
		}
	};

	return (
		<Container size={420} mt={200}>
			<Title align="center" style={{ fontWeight: 700 }}>
				Welcome back
			</Title>
			<Text c="dimmed" size="sm" align="center" mt={5}>
				Admin and Employee login
			</Text>

			<Paper withBorder shadow="md" p="xl" radius="md" mt={30}>
				<Stack>
					<TextInput
						label="Email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
						required
					/>
					<PasswordInput
						label="Password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
						required
					/>
					{error && (
						<Text c="red" size="sm">
							{error}
						</Text>
					)}
					<Button fullWidth mt="md" size="md" onClick={handleLogin}>
						Log in
					</Button>
				</Stack>
			</Paper>
		</Container>
	);
}
