import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, AuthProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
