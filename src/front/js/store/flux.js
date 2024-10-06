import Login from "../pages/Login";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			loginUser: async (username, password, email) => {
				const resp = await fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password, email })
				});

				if (!resp.ok) throw Error("There was a problem in the login request");

				if (resp.status === 401) {
					throw "Invalid credentials";
				} else if (resp.status === 400) {
					throw "Invalid email or password format";
				}
				const data = await resp.json();
				// Guarda el token en la localStorage
				localStorage.setItem("jwt-token", data.token);
				// Actualiza el estado de autenticación en el store
				setStore({ auth: true });

				return data;
			},
			logoutUser: () => {
				// Elimina el token de la localStorage
				localStorage.removeItem("jwt-token");
				// Actualiza el estado de autenticación en el store
				setStore({ auth: false });
			},
			checkAuth: () => {
				const token = localStorage.getItem("jwt-token");
				setStore({ auth: !!token });
			}
		}
	};
};

export default getState;
