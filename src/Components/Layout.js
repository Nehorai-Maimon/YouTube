import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Songs from "../Pages/Songs/Song";

export default function Layout() {
    return <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/entered" element={<Songs />} />
        </Routes>
    </div>
}