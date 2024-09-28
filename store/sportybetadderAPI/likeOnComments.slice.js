import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_disqus_comment_like_create = createAsyncThunk(
  "likeOnComments/modules_disqus_comment_like_create",
  async payload => {
    const response = await apiService.modules_disqus_comment_like_create(
      payload
    )
    return response.data
  }
)
export const modules_disqus_comment_like_retrieve = createAsyncThunk(
  "likeOnComments/modules_disqus_comment_like_retrieve",
  async payload => {
    const response = await apiService.modules_disqus_comment_like_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_disqus_comment_like_update = createAsyncThunk(
  "likeOnComments/modules_disqus_comment_like_update",
  async payload => {
    const response = await apiService.modules_disqus_comment_like_update(
      payload
    )
    return response.data
  }
)
export const modules_disqus_comment_like_partial_update = createAsyncThunk(
  "likeOnComments/modules_disqus_comment_like_partial_update",
  async payload => {
    const response = await apiService.modules_disqus_comment_like_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_disqus_comment_like_destroy = createAsyncThunk(
  "likeOnComments/modules_disqus_comment_like_destroy",
  async payload => {
    const response = await apiService.modules_disqus_comment_like_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const likeOnCommentsSlice = createSlice({
  name: "likeOnComments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_disqus_comment_like_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_disqus_comment_like_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_disqus_comment_like_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_disqus_comment_like_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_disqus_comment_like_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_disqus_comment_like_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_disqus_comment_like_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_disqus_comment_like_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_disqus_comment_like_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_disqus_comment_like_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_disqus_comment_like_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_disqus_comment_like_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_disqus_comment_like_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_disqus_comment_like_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_disqus_comment_like_destroy.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_disqus_comment_like_create,
  modules_disqus_comment_like_retrieve,
  modules_disqus_comment_like_update,
  modules_disqus_comment_like_partial_update,
  modules_disqus_comment_like_destroy,
  slice: likeOnCommentsSlice
}
