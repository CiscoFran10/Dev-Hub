import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import Providers from "./Provider/.";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyles />
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);
