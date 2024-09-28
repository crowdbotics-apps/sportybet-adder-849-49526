import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_openai_chat_completions_create = createAsyncThunk(
  "createChatCompletions/modules_openai_chat_completions_create",
  async payload => {
    const response = await apiService.modules_openai_chat_completions_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createChatCompletionsSlice = createSlice({
  name: "createChatCompletions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_openai_chat_completions_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_openai_chat_completions_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_openai_chat_completions_create.rejected,
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
  modules_openai_chat_completions_create,
  slice: createChatCompletionsSlice
}
