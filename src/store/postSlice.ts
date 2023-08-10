import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPost } from "@/types";

import posts from "@/mocks/posts.json";

export interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost(state, action: PayloadAction<IPost>) {
      const { id } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      state.posts[index] = action.payload;
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
