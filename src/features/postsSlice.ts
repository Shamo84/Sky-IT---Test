import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsState {
  value: any[];
}

const initialState: PostsState = {
  value: [],
};

export const postsSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updatePosts: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updatePosts } = postsSlice.actions;
export default postsSlice.reducer;
