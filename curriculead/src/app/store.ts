import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import curriculumReducer from "../features/home/curriculum/curriculumSlice";
import publicReducer from "../features/home/curriculum/curriculumSlice";
import signinReducer from "../features/home/curriculum/curriculumSlice";
import registerReducer from "../features/home/curriculum/curriculumSlice";
import perfilAccountReducer from "../features/home/curriculum/curriculumSlice";

export const store = configureStore({
  reducer: {
    curriculum: curriculumReducer,
    public: publicReducer,
    signin: signinReducer,
    register: registerReducer,
    perfilAccount: perfilAccountReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
