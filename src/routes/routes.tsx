import React, { Suspense } from "react";
import { RenderRoutes } from "./RenderRoutes";
import SuspenseSpinner from "components/SuspenseFallback";

export const routes: React.FunctionComponent = () => {
    return (
        <Suspense fallback={<SuspenseSpinner />}>
            <RenderRoutes />
        </Suspense>
    );
}