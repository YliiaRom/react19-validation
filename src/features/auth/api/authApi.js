function mapFirebaseUser(user) {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    role: user.role || "user",
  };
}
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import DbOperations from "@/shared/api/DbOperations.js";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const auth = getAuth();
          const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          const userDb = new DbOperations("users");
          // async getById(id) {
          //   const snap = await getDoc(doc(this.collectionRef, id));
          //   return { id: snap.id, ...snap.data() };
          // }
          const userData = await userDb.getById(result.user.uid);

          return { data: { ...mapFirebaseUser(result.user), ...userData } };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
    }),
    googleLogin: builder.mutation({
      async queryFn() {
        try {
          //doc
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          //doc .setCustomParameters | signInWithPopup(auth, provider
          provider.setCustomParameters({ prompt: "select_account" });

          const result = await signInWithPopup(auth, provider);
          const usersDb = new DbOperations("users");
          //doc ------.metadata.creationTime |.metadata.lastSignInTime
          if (
            result.user &&
            result.user.metadata.creationTime ===
              result.user.metadata.lastSignInTime
          ) {
            // async setWithId(id, data) {
            //   await setDoc(doc(this.collectionRef, id), data);
            //   return true;
            // }
            await usersDb.setWithId(result.user.uid, {
              uid: result.user.uid,
              email: result.user.email,
              displayName: result.user.displayName || "",
              photoURL: result.user.photoURL || "",
              role: result.user.role || "user",
              createAt: new Date().toISOString(),
            });
          }
          const userData = await usersDb.getById(result.user.uid);
          return { data: { ...mapFirebaseUser(result.user), ...userData } };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
    }),
    signUp: builder.mutation({
      async queryFn({ email, password, displayName }) {
        console.log(`signUp--------`, email, password, displayName);
        try {
          const auth = getAuth();
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const usersDb = new DbOperations("users");
          // async setWithId(id, data) {
          //   await setDoc(doc(this.collectionRef, id), data);
          //   return true;
          // }

          await updateProfile(result.user, {
            displayName: displayName,
            photoURL: "",
          });
          await result.user.reload();

          await usersDb.setWithId(result.user.uid, {
            uid: result.user.uid,
            email: result.user.email,
            displayName,
            photoURL: result.user.photoURL || "",
            role: "user",
            createAt: new Date().toISOString(),
          });

          return {
            data: {
              ...mapFirebaseUser(result.user),
              displayName,
              photoURL: result.user.photoURL || "",
            },
          };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
    }),
    refresh: builder.mutation({
      async queryFn() {
        try {
          const auth = getAuth();
          //--doc
          const user = auth.currentUser;
          if (!user) return { error: { message: "Not authenticated" } };
          const userDb = new DbOperations("users");
          const userData = await userDb.getById(user.uid);

          return { data: { ...mapFirebaseUser(user), ...userData } };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
    }),
    logout: builder.mutation({
      async queryFn() {
        try {
          const auth = getAuth();
          await signOut(auth);

          return { data: true };
        } catch (error) {
          console.log(error.message);
          return { error: { message: error.message } };
        }
      },
    }),
  }),
});
export const {
  useLoginMutation,
  useGoogleLoginMutation,
  useSignUpMutation,
  useRefreshMutation,
  useLogoutMutation,
} = authApi;
