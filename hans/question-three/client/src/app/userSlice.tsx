import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      username: "",
      points: 0,
    },
    history: [],
    jsonWebToken: "",
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload.type === "LOGIN") {
        state.user.id = action.payload.id;
        state.user.username = action.payload.username;
        state.user.points = action.payload.points;
        state.isLoggedIn = true;
      } else if (action.payload.type === "LOGOUT") {
        state.user = {
          id: "",
          username: "",
          points: 0,
        };
        state.isLoggedIn = false;
      }
    },

    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});
export const { setUser, setHistory } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
