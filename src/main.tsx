import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.scss";

import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />,
);
