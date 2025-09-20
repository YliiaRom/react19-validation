import { frontRoutes } from "@/shared/api/config/routes/frontRoutes.js";
import { Component } from "react";

export const pagesList = Object.keys(frontRoutes.pages);
export const appRouterRoutes = pagesList.map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => ({
    Component: (await import(`../../pages/${page}.jsx`)).default,
  }),
}));
