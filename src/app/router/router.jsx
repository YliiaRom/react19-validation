import { Mutex } from "async-mutex";
import { authCheckLoader } from "./authCheckLoader";
import { createBrowserRouter } from "react-router";
import MainLayout from "@/widgets/layout/MainLayout";
import GlobalErrorPage from "@/pages/GlobalErrorPage";
import { appRouterRoutes } from "./appRouterRoutes";

const refreshMutex = new Mutex();
const authLoader = authCheckLoader({ refreshMutex });

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    children: appRouterRoutes.map((route) => ({
      ...route,
      loader: () => authLoader(route),
    })),
  },
]);
