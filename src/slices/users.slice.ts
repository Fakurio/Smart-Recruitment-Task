import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user";
import { sanitizePhone } from "../utils/sanitize-phone";

interface UsersState {
  users: User[];
  filteredUsers: User[];
}

export interface FilterUsersPayload {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    filterUsers(state, action: PayloadAction<FilterUsersPayload>) {
      const { name, username, email, phone } = action.payload;
      const matchedUsers = state.users
        .filter((user) =>
          user.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())
        )
        .filter((user) =>
          user.username
            .toLocaleLowerCase()
            .startsWith(username.toLocaleLowerCase())
        )
        .filter((user) =>
          user.email.toLocaleLowerCase().startsWith(email.toLocaleLowerCase())
        )
        .filter((user) => sanitizePhone(user.phone).startsWith(phone));
      state.filteredUsers = matchedUsers;
    },
  },
});

export const { setUsers, filterUsers } = usersSlice.actions;
export default usersSlice.reducer;
