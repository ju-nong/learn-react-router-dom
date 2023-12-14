import type { RouteObject } from "react-router-dom";

import { Home } from "../../pages/main";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
];

export default routes;
