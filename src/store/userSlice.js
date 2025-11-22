import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user action",
  initialState: {
    isAuth: localStorage.getItem("isAuth"),
    userAction: JSON.parse(localStorage.getItem("userAction" || null)),
  },
  reducers: {
    login: (state, actions) => {
      state.isAuth = actions.payload.isAuth;
      state.userAction = actions.payload.userAction;

      localStorage.setItem("userAction", JSON.stringify(state.userAction));
      localStorage.setItem("isAuth", state.isAuth);
    },
    changePassword: (state, action) => {
      state.userAction = {
        ...state.userAction,
        password: action.payload,
      };

      localStorage.setItem("userAction", JSON.stringify(state.userAction));
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;

      localStorage.removeItem("userAction");
      localStorage.removeItem("isAuth");
    },
  },
});

export const { login, logout, changePassword } = userSlice.actions;
export default userSlice.reducer;
