import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_disqus_comment_like_list = createAsyncThunk(
  "paginatedLikeOnCommentLists/modules_disqus_comment_like_list",
  async payload => {
    const response = await apiService.modules_disqus_comment_like_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const paginatedLikeOnCommentListsSlice = createSlice({
  name: "paginatedLikeOnCommentLists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_disqus_comment_like_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_disqus_comment_like_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_like_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  modules_disqus_comment_like_list,
  slice: paginatedLikeOnCommentListsSlice
}
