import React from "react";
import { renderRoutes, RouteConfig } from 'react-router-config';
import Layout from "@/layout"

const router: RouteConfig[] = [
    {
        path: "/",
        component: Layout,
        routes: [
            {
                path: "/",
                exact: true,
                component: React.lazy(() => import("@/pages/home"))
            },
            
            { component: React.lazy(() => import("@/pages/404")) },
        ]
    },

    { component: React.lazy(() => import("@/pages/404")) },
]

export default renderRoutes(router)