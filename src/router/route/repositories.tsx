import type { RouteObject } from "react-router-dom";

import { Repositories } from "../../pages/repositories";

const routes: RouteObject[] = [
    {
        path: "repositories",
        element: <Repositories />,
    },
];

export default routes;
