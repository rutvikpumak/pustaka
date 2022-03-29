import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, AuthProvider } from "./context";
import { OrderProvider } from "./context/order/orderContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <DataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DataProvider>
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
