import CheckValidityPage from "@/pages/CheckValidityPage";
import ControllerPage from "@/pages/ControllerPage";
import HomePage from "@/pages/HomePage";
import JSUserFormPage from "@/pages/JSUserFormPage";
import LoginPage from "@/pages/LoginPage";
import ReactHookFormPage from "@/pages/ReactHookFormPage";
import RegisterFormWithYup from "@/pages/RegisterFormWithYup";
import ReportValidityPage from "@/pages/ReportValidityPage";
import SetCustomValidityPage from "@/pages/SetCustomValidityPage";
import StaticValidationPage from "@/pages/StaticValidationPage";
import ValidityPage from "@/pages/ValidityPage";
import YupPage from "@/pages/YupPage";
import { frontRoutes } from "@/shared/api/config/routes/frontRoutes.js";
import { Component } from "react";

export const pagesList = Object.keys(frontRoutes.pages);

// export const appRouterRoutes = pagesList.map((page) => ({
//   ...frontRoutes.pages[page],
//   lazy: async () => ({
//     Component: (await import(`../../pages/${page}.jsx`)).default,
//   }),
// }));
export const appRouterRoutes = [
  {
    ...frontRoutes.pages.HomePage,
    lazy: async () => ({ Component: HomePage }),
  },
  {
    ...frontRoutes.pages.LoginPage,
    lazy: async () => ({ Component: LoginPage }),
  },
  {
    ...frontRoutes.pages.StaticValidationPage,
    lazy: async () => ({ Component: StaticValidationPage }),
  },
  {
    ...frontRoutes.pages.JSUserFormPage,
    lazy: async () => ({ Component: JSUserFormPage }),
  },
  {
    ...frontRoutes.pages.CheckValidityPage,
    lazy: async () => ({ Component: CheckValidityPage }),
  },
  {
    ...frontRoutes.pages.ValidityPage,
    lazy: async () => ({ Component: ValidityPage }),
  },
  {
    ...frontRoutes.pages.ReportValidityPage,
    lazy: async () => ({ Component: ReportValidityPage }),
  },
  {
    ...frontRoutes.pages.SetCustomValidityPage,
    lazy: async () => ({ Component: SetCustomValidityPage }),
  },
  {
    ...frontRoutes.pages.ReactHookFormPage,
    lazy: async () => ({ Component: ReactHookFormPage }),
  },
  { ...frontRoutes.pages.YupPage, lazy: async () => ({ Component: YupPage }) },
  {
    ...frontRoutes.pages.ControllerPage,
    lazy: async () => ({ Component: ControllerPage }),
  },
  {
    ...frontRoutes.pages.RegisterFormWithYup,
    lazy: async () => ({ Component: RegisterFormWithYup }),
  },
];
