import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserData } from "../../utils";
const currentUser = getUserData();

interface CurrentUserState {
  currentUserInfo: {
    email: string;
    firstName: string;
    lastName: string;
    profilePicture?: string;
    userId: string;
    role: string;
  } | null;
}

const initialState: CurrentUserState = {
  currentUserInfo: currentUser || null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      action: PayloadAction<CurrentUserState["currentUserInfo"]>
    ) => {
      state.currentUserInfo = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUserInfo = null;
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;