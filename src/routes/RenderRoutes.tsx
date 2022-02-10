import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const TaskFormRedux = lazy(() => import("pages/Test/Todo/TaskFormRedux"));
const TaskRedux = lazy(() => import("pages/Test/Todo/TaskRedux"));
const Login = lazy(() => import('pages/auth/Login'));
const Home = lazy(() => import('pages/Home'));
const Request = lazy(() => import('pages/Request/RequestList'));

type routeItem = {
    path: string,
    key: string,
    exact: boolean,
    component: Function,
}

type routes = routeItem & {
    routes?: routeItem[]
}


const ROUTES: routes[] = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        component: () => {
            if (!localStorage.getItem("token")) {
                return <Navigate to={"/login"} />;
            }
            return <Navigate to={"/app"} />;
        },
        routes: []
    },
    {
        path: "/login",
        key: "LOGIN",
        exact: true,
        component: Login,
        routes: []
    },
    {
        path: "/app",
        exact: false,
        key: "APP",
        component: props => {
            if (!localStorage.getItem("token")) {
                return <Navigate to={"/"} />;
            }
            return <Navigate {...props} />;
        },
        routes: [
            {
                path: "/app",
                key: "APP_ROOT",
                exact: true,
                component: Home,
            },
            {
                path: "/app/task",
                key: "Todo1",
                exact: true,
                component: TaskRedux,
            },
            {
                path: "/app/task/add",
                key: "Todo2",
                exact: true,
                component: TaskFormRedux,
            },
            {
                path: "/app/task/edit/:id",
                key: "Todo3",
                exact: true,
                component: TaskFormRedux,
            }
        ],
    },
    {
        path: "/request",
        exact: false,
        key: "REQUEST",
        component: props => {
            if (!localStorage.getItem("token")) {
                return <Navigate to={"/"} />;
            }
            return <RenderRoutes {...props} />;
        },
        routes: [
            {
                path: "/request",
                key: "REQUEST_LIST",
                exact: true,
                component: Request,
            }
        ],
    }
];

export default ROUTES


export function RenderRoutes({ routes }: { routes: routes[] }) {
    return (
        <Routes>
            {routes.map((route, i) => {
                // return <RouteWithSubRoutes {...route} />;
                return <Route
                    key={route.key}
                    path={route.path}
                    element={props => <route.component {...props} />}
                />
            })}

            <Route element={() => <h1>Not Found!</h1>} />
        </Routes>
    );
}
