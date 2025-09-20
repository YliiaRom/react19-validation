import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";
import DbOperations from "@/shared/api/DbOperations.js";

const db = new DbOperations("users_for_forms");

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      async queryFn() {
        try {
          const users = await db.getAll();
          return { data: users };
        } catch (error) {
          return { error: { message: error?.message } };
        }
      },
      providesTags: ["User"],
    }),

    registerUser: builder.mutation({
      async queryFn(payload) {
        try {
          const result = await db.add(payload);
          console.log(result);
          return { data: result };
        } catch (e) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: e?.message || "Register failed",
            },
          };
        }
      },
    }),
    updateUserRole: builder.mutation({
      async queryFn({ uid, role }) {
        try {
          await db.update(uid, { role });
          return { data: true };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["User"],
    }),
    addUser: builder.mutation({
      async queryFn(user) {
        try {
          await db.add(user);
          return { data: true };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error } };
        }
      },
      invalidatesTags: [],
    }),
    deleteUser: builder.mutation({
      async queryFn(uid) {
        try {
          await db.delete(uid);
          return { data: true };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["User"],
    }),
  }),
});
export const {
  useGetAllUsersQuery,
  useRegisterUserMutation,
  useUpdateUserRoleMutation,
  useAddUserMutation,
  useDeleteUserMutation,
} = userApi;
