import type { RouteObject } from "react-router-dom";

import App from "../../App";
import { Home } from "../../pages/main";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
];

export default routes;
