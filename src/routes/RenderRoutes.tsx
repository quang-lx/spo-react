import React, {lazy} from "react";
import { Routes, Route} from "react-router-dom";
import MainLayout from "../layouts/Main";
import SubMenuLayout from '../layouts/SubMenu';

// const TaskFormRedux = lazy(() => import("pages/Test/Todo/TaskFormRedux"));
// const TaskRedux = lazy(() => import("pages/Test/Todo/TaskRedux"));
// const Login = lazy(() => import('pages/auth/Login'));
const Home = lazy(() => import('pages/Home'));
// const Request = lazy(() => import('pages/Request/RequestList'));
const RequestCreate = lazy(() => import('pages/Request/RequestCreate'));
const RequestDetail = lazy(() => import('pages/Request/RequestDetail'));
const WorkList = lazy(() => import('pages/Work/WorkList'));

export const RenderRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<SubMenuLayout />}>
          <Route path="request" element={<RequestDetail />} />
          <Route path="request/create" element={<RequestCreate />} />
          <Route path="request/detail/:id" element={<RequestDetail />} />
        </Route>
        <Route element={<SubMenuLayout hasBigSubMenu={false} />}>
          <Route path="work" element={<WorkList />} />
        </Route>
      </Route>
      <Route path="/app" element={<Home />} />
    </Routes>
  )
}

export const RoutePaths = {
  "Home": "/",
  "Request": "/request",
  "RequestCreate": "/request/create",
  "RequestDetail": "/request/detail",
  "WorkList": "/work",
}

export const createRequestDetailLink = (id: number | string) => {
  return `${RoutePaths.RequestDetail}/${id}`
}