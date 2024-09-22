import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Curriculum } from "../../types";

import {
  createCurriculum as apiCreateCurriculum,
  updateCurriculum as apiUpdateCurriculum,
  getCurriculumUserId as apiGetCurriculumUserId,
  getCurriculumUrl as apiGetCurriculumUrl,
} from "./curriculumApi";

interface CurriculumState {
  curriculum: Curriculum | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CurriculumState = {
  curriculum: null,
  status: "idle",
  error: null,
};

export const createCurriculum = createAsyncThunk(
  "curriculum/createCurriculum",
  async (curriculum: Curriculum) => {
    const response = await apiCreateCurriculum(curriculum);
    return response.data;
  }
);

export const updateCurriculum = createAsyncThunk(
  "curriculum/updateCurriculum",
  async (curriculum: Curriculum) => {
    const response = await apiUpdateCurriculum(curriculum);
    return response.data;
  }
);

export const getCurriculumUserId = createAsyncThunk(
  "curriculum/getCurriculumUserId",
  async (userId: string) => {
    const response = await apiGetCurriculumUserId(userId);
    return response.data;
  }
);

export const getCurriculumUrl = createAsyncThunk(
  "curriculum/getCurriculumUrl",
  async (urlCurriculum: string) => {
    const response = await apiGetCurriculumUrl(urlCurriculum);
    return response.data;
  }
);

const curriculumSlice = createSlice({
  name: 'curriculum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCurriculum.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCurriculum.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.curriculum = action.payload;
      })
      .addCase(createCurriculum.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create curriculum';
      })
      .addCase(updateCurriculum.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCurriculum.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.curriculum = action.payload;
      })
      .addCase(updateCurriculum.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update curriculum';
      })
      .addCase(getCurriculumUserId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCurriculumUserId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.curriculum = action.payload;
      })
      .addCase(getCurriculumUserId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch curriculum';
      })
      .addCase(getCurriculumUrl.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCurriculumUrl.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.curriculum = action.payload;
      })
      .addCase(getCurriculumUrl.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch curriculum';
      });
  },
});

export default curriculumSlice.reducer;
