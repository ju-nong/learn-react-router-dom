import { TheHeader } from "./layout";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <TheHeader />
            <Outlet />
        </>
    );
}

export default App;
