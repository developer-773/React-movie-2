import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import { QueryProvider } from "./context/QueryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<QueryProvider>
			<App />
		</QueryProvider>
	</AuthProvider>
);
