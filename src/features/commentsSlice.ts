import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentsState {
  value: any[];
}

const initialState: CommentsState = {
  value: [],
};

export const commentsSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateComments: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateComments } = commentsSlice.actions;
export default commentsSlice.reducer;
