import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const rest_auth_logout_create = createAsyncThunk(
  "restAuthDetails/rest_auth_logout_create",
  async payload => {
    const response = await apiService.rest_auth_logout_create(payload)
    return response.data
  }
)
export const rest_auth_password_change_create = createAsyncThunk(
  "restAuthDetails/rest_auth_password_change_create",
  async payload => {
    const response = await apiService.rest_auth_password_change_create(payload)
    return response.data
  }
)
export const rest_auth_password_reset_create = createAsyncThunk(
  "restAuthDetails/rest_auth_password_reset_create",
  async payload => {
    const response = await apiService.rest_auth_password_reset_create(payload)
    return response.data
  }
)
export const rest_auth_password_reset_confirm_create = createAsyncThunk(
  "restAuthDetails/rest_auth_password_reset_confirm_create",
  async payload => {
    const response = await apiService.rest_auth_password_reset_confirm_create(
      payload
    )
    return response.data
  }
)
export const rest_auth_registration_resend_email_create = createAsyncThunk(
  "restAuthDetails/rest_auth_registration_resend_email_create",
  async payload => {
    const response = await apiService.rest_auth_registration_resend_email_create(
      payload
    )
    return response.data
  }
)
export const rest_auth_registration_verify_email_create = createAsyncThunk(
  "restAuthDetails/rest_auth_registration_verify_email_create",
  async payload => {
    const response = await apiService.rest_auth_registration_verify_email_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const restAuthDetailsSlice = createSlice({
  name: "restAuthDetails",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(rest_auth_logout_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(rest_auth_logout_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_logout_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_password_change_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(rest_auth_password_change_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_password_change_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_password_reset_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(rest_auth_password_reset_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(rest_auth_password_reset_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        rest_auth_password_reset_confirm_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        rest_auth_password_reset_confirm_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        rest_auth_password_reset_confirm_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        rest_auth_registration_resend_email_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        rest_auth_registration_resend_email_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        rest_auth_registration_resend_email_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        rest_auth_registration_verify_email_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        rest_auth_registration_verify_email_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        rest_auth_registration_verify_email_create.rejected,
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
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  slice: restAuthDetailsSlice
}
