import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_disqus_comment_create = createAsyncThunk(
  "comments/modules_disqus_comment_create",
  async payload => {
    const response = await apiService.modules_disqus_comment_create(payload)
    return response.data
  }
)
export const modules_disqus_comment_retrieve = createAsyncThunk(
  "comments/modules_disqus_comment_retrieve",
  async payload => {
    const response = await apiService.modules_disqus_comment_retrieve(payload)
    return response.data
  }
)
export const modules_disqus_comment_update = createAsyncThunk(
  "comments/modules_disqus_comment_update",
  async payload => {
    const response = await apiService.modules_disqus_comment_update(payload)
    return response.data
  }
)
export const modules_disqus_comment_partial_update = createAsyncThunk(
  "comments/modules_disqus_comment_partial_update",
  async payload => {
    const response = await apiService.modules_disqus_comment_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_disqus_comment_destroy = createAsyncThunk(
  "comments/modules_disqus_comment_destroy",
  async payload => {
    const response = await apiService.modules_disqus_comment_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_disqus_comment_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_disqus_comment_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_disqus_comment_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_disqus_comment_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_disqus_comment_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_disqus_comment_partial_update.fulfilled,
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
        modules_disqus_comment_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_disqus_comment_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_disqus_comment_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_disqus_comment_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  modules_disqus_comment_create,
  modules_disqus_comment_retrieve,
  modules_disqus_comment_update,
  modules_disqus_comment_partial_update,
  modules_disqus_comment_destroy,
  slice: commentsSlice
}
