// import { authApi } from "@/features/auth/api/authApi";
// import { roles } from "../roles";

export const frontRoutes = {
  pages: {
    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "home",
        isInMenu: true,
        requireAuth: false,
      },
    },
    LoginPage: {
      path: "login-page",
      navigationPath: "/login-page",
      meta: {
        title: "loginPage",
        isInMenu: true,
        requireAuth: false,
      },
    },
    // UsersPage: {
    //   path: "users",
    //   navigationPath: "/users",
    //   meta: {
    //     title: "userPage",
    //     isInMenu: true,
    //     requireAuth: true,
    //     roles: [roles.admin],
    //   },
    // },
    StaticValidationPage: {
      path: "validation",
      navigationPath: "/validation",
      meta: {
        title: "staticValidation",
        isInMenu: true,
        requireAuth: false,
      },
    },
    JSUserFormPage: {
      path: "js",
      navigationPath: "/js",
      meta: {
        title: "js-UserForm",
        isInMenu: true,
        requireAuth: false,
      },
    },
    CheckValidityPage: {
      path: "check-validity",
      navigationPath: "/check-validity",
      meta: {
        title: "checkValidity",
        isInMenu: true,
        requireAuth: false,
      },
    },

    ValidityPage: {
      path: "validity",
      navigationPath: "/validity",
      meta: {
        title: "validity / { }",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ReportValidityPage: {
      path: "report-validity",
      navigationPath: "/report-validity",
      meta: {
        title: "reportValidity",
        isInMenu: true,
        requireAuth: false,
      },
    },

    SetCustomValidityPage: {
      path: "custom-validity",
      navigationPath: "/custom-validity",
      meta: {
        title: "setCustomValidity",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ReactHookFormPage: {
      path: "react-hook-form",
      navigationPath: "/react-hook-form",
      meta: {
        title: "react-hook-form",
        isInMenu: true,
        requireAuth: false,
      },
    },
    YupPage: {
      path: "yup",
      navigationPath: "/yup",
      meta: {
        title: "Yup",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ControllerPage: {
      path: "controller",
      navigationPath: "/controller",
      meta: {
        title: "Controller",
        isInMenu: true,
        requireAuth: false,
      },
    },
    RegisterFormWithYup: {
      path: "register-form-yup",
      navigationPath: "/register-form-yup",
      meta: {
        title: "Register Form (yup)",
        isInMenu: true,
        requireAuth: false,
      },
    },
  },
};

export const getPagesObjectList = () => {
  const pagesListKeys = Object.keys(frontRoutes.pages);
  return pagesListKeys.map((key) => frontRoutes.pages[key]);
};
