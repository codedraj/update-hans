import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    isLoggedIn: false,
    equationObject: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setEquationObject: (state, action) => {
      state.equationObject = action.payload;
    },
  },
});
export const { setIsLoggedIn, setUserData, setEquationObject } =
  userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
