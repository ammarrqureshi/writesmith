import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fa8c16",
          colorInfo: "#fa8c16",
          colorSuccess: "#00a600",
          borderRadius: 10,
          wireframe: false,
        },
        components: {
          Button: {
            controlHeight: 40,
            controlHeightLG: 46,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
