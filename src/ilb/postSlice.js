/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = { posts: [], loading: false, error: null, post: null };
// Get posts function
export let getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;

    try {
      let res = await fetch("https://6795b152bedc5d43a6c341d6.mockapi.io/crud");
      // console.log(res);
      let data = await res.json();
      // console.log(data);
      return data;
    } catch (err) {
      // console.log(err.message);
      return rejectWithValue(err.message);
    }
  }
);
// Delete post function
export let deletePostFunc = createAsyncThunk(
  "posts/deletePostFunc",
  async (id, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    // console.log(id);
    try {
      await axios.delete(
        `https://6795b152bedc5d43a6c341d6.mockapi.io/crud/${id}`
      );
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// Insert post function
export let insertPost = createAsyncThunk(
  "posts/insertPost",
  async (item, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(
        `https://6795b152bedc5d43a6c341d6.mockapi.io/crud`,
        {
          method: "post",
          body: JSON.stringify(item),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// // get post function
export let getPost = createAsyncThunk("posts/getPost", async (id, thunkAPI) => {
  let { rejectWithValue } = thunkAPI;
  try {
    let res = await fetch(
      `https://6795b152bedc5d43a6c341d6.mockapi.io/crud/${id}`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});
// Edit post function
export let editPost = createAsyncThunk(
  "posts/editPost",
  async (item, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(
        `https://6795b152bedc5d43a6c341d6.mockapi.io/crud/${item.id}`,
        {
          method: "PUT",
          body: JSON.stringify(item),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
let postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    cleanPost: (state) => {
      state.post = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Posts
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.posts = action.payload;
      state.error = null;
    }),
      builder.addCase(getAllPosts.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
      // Deleting Post
      builder.addCase(deletePostFunc.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(deletePostFunc.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.loading = false;
      }),
      builder.addCase(deletePostFunc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
      // Inserting Post
      builder.addCase(insertPost.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(insertPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      }),
      builder.addCase(insertPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
      // get Post
      builder.addCase(getPost.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(getPost.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
      }),
      builder.addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
      // edit Post
      builder.addCase(editPost.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(editPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      }),
      builder.addCase(editPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export let postsReducer = postSlice.reducer;
export let { cleanPost } = postSlice.actions;
