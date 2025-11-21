import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user action",
  initialState: {
    isAuth: false,
    userAction: localStorage.getItem("userAction" || null),
  },
  reducers: {
    login: (state, actions) => {
      state.isAuth = actions.payload.isAuth;
      state.userAction = actions.payload.userAction;

      localStorage.setItem("userAction", JSON.stringify(state.userAction));
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;

      localStorage.removeItem("userAction");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
