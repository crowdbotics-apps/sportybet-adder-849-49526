import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const rest_auth_user_retrieve = createAsyncThunk(
  "userDetails/rest_auth_user_retrieve",
  async payload => {
    const response = await apiService.rest_auth_user_retrieve(payload)
    return response.data
  }
)
export const rest_auth_user_update = createAsyncThunk(
  "userDetails/rest_auth_user_update",
  async payload => {
    const response = await apiService.rest_auth_user_update(payload)
    return response.data
  }
)
export const rest_auth_user_partial_update = createAsyncThunk(
  "userDetails/rest_auth_user_partial_update",
  async payload => {
    const response = await apiService.rest_auth_user_partial_update(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(rest_auth_user_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(rest_auth_user_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_user_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_user_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(rest_auth_user_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_user_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_user_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(rest_auth_user_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_user_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  slice: userDetailsSlice
}
