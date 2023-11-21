const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  recordes: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/posts/${id}`, { method: "DELETE" });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetch posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.recordes = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //create post

    //delete post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.recordes = state.recordes.filter(
        (record) => record.id !== action.payload
      );
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //edit post
  },
});

export default postSlice.reducer;
