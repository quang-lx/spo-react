import React, {lazy} from "react";
import { Routes, Route} from "react-router-dom";
import MainLayout from "../layouts/Main";
import SubMenuLayout from '../layouts/SubMenu';

// const TaskFormRedux = lazy(() => import("pages/Test/Todo/TaskFormRedux"));
// const TaskRedux = lazy(() => import("pages/Test/Todo/TaskRedux"));
// const Login = lazy(() => import('pages/auth/Login'));
const Home = lazy(() => import('pages/Home'));
const Request = lazy(() => import('pages/Request/RequestList'));
const RequestCreate = lazy(() => import('pages/Request/RequestCreate'));

export const RenderRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="request" element={<Request />} />
        <Route element={<SubMenuLayout />}>
          <Route path="request/create" element={<RequestCreate />} />
        </Route>
      </Route>
      <Route path="/app" element={<Home />} />
    </Routes>
  )
}