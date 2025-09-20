import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "@/features/api/themeSlice.js";
import authSliceReducer from "@/features/auth/api/authSlice.js";
import { authApi } from "@/features/auth/api/authApi.js";
import { userApi } from "@/entities/user/api/userApi";

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
    auth: authSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});
