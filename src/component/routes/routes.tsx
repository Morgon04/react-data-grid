// React Route Dom Import
import { Navigate, Route, Routes } from "react-router-dom";

// Routes List Import
import RouteList, { dataGridComponentPath } from "./routeList";

export const ReactRoutes = () => {
    return (
        <Routes>
            {
                [
                    RouteList().map(({ link, Component }) => {
                        return (<Route path={link} element={<Component />} />)
                    }),
                    <Route key={'/'} path="/" element={<Navigate to={dataGridComponentPath} />} />, // Default Route
                ]
            }
        </Routes>
    )
};

export default ReactRoutes;