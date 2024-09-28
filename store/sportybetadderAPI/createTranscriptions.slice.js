import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_openai_audio_translation_create = createAsyncThunk(
  "createTranscriptions/modules_openai_audio_translation_create",
  async payload => {
    const response = await apiService.modules_openai_audio_translation_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createTranscriptionsSlice = createSlice({
  name: "createTranscriptions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_openai_audio_translation_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_openai_audio_translation_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_openai_audio_translation_create.rejected,
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
  modules_openai_audio_translation_create,
  slice: createTranscriptionsSlice
}
