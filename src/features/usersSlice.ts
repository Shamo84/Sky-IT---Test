import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
  value: any[];
}

const initialState: UsersState = {
  value: [],
};

export const usersSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
