import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const FAKE_ADMIN = {
	name: "Jack",
	email: "jack@example.com",
	password: "12345",
};
const FAKE_EMPLOYEE = {
	name: "Jay",
	email: "jay@gmail.com",
	password: "12345",
};

const initialState = { user: null, isAuthenticated: false };

function reducer(state, action) {
	switch (action.type) {
		case "login":
			return { ...state, user: action.payload, isAuthenticated: true };
		case "logout":
			return { ...state, user: null, isAuthenticated: false };
		default:
			throw new Error("Unknown action type!");
	}
}

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function login(email, password) {
		if (email === FAKE_ADMIN.email && password === FAKE_ADMIN.password) {
			dispatch({ type: "login", payload: FAKE_ADMIN });
			return { success: true };
		} else if (
			email === FAKE_EMPLOYEE.email &&
			password === FAKE_EMPLOYEE.password
		) {
			dispatch({ type: "login", payload: FAKE_EMPLOYEE });
			return { success: true };
		} else {
			return { success: false, message: "Invalid email or password" };
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used inside AuthProvider");
	return context;
}

export { AuthProvider, useAuth };
