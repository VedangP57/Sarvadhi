import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { AppProviders } from "./hooks/Providers.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import { theme } from "./theme";

export default function App() {
	return (
		<>
			<MantineProvider theme={theme}>
				<AppProviders>
					<Dashboard />
				</AppProviders>
			</MantineProvider>
		</>
	);
}
