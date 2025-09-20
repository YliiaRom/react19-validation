import { frontRoutes } from "@/shared/api/config/routes/frontRoutes.js";
import { Component } from "react";

const pages = import.meta.globEager("../../pages/*.jsx");

export const appRouterRoutes = Object.keys(frontRoutes.pages).map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => {
    const module = pages[`../../pages/${page}.jsx`];
    return { Component: module.default };
  },
}));
// export const pagesList = Object.keys(frontRoutes.pages);

// export const appRouterRoutes = pagesList.map((page) => ({
//   ...frontRoutes.pages[page],
//   lazy: async () => ({
//     Component: (await import(`../../pages/${page}.jsx`)).default,
//   }),
// }));
