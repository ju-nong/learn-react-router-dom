import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="text-center">
            Hello World!
            <Outlet />
        </div>
    );
}

export default App;
