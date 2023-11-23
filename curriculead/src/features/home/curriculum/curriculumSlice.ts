import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Curriculum from "./Curriculum";

const initialState: Curriculum = new Curriculum({});

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState,
  reducers: {
    fillCurriculum: (state, action: PayloadAction<Curriculum>) => {
      state.state = action.payload;
    },
  },
});

export const { fillCurriculum } = curriculumSlice.actions;

export default curriculumSlice.reducer;
