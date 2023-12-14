import { RouterProvider } from "react-router-dom";
import router from "./router";

import { TheHeader } from "./layout";

function App() {
    return (
        <>
            <TheHeader />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
