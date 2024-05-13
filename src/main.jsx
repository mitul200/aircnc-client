// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
// import { router } from './routes/Routes'
// import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {/* <Toaster /> */}
    <RouterProvider router={router} />
  </AuthProvider>
);
