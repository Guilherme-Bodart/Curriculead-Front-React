import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import {
  getCurriculumUserId,
  createCurriculum,
  updateCurriculum,
} from "./curriculumSlice";
import { Curriculum as CurriculumModel} from "../../types";
import  Curriculum from "../../../components/Curriculums/Curriculum";

const CurriculumComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const curriculumState = useSelector((state: RootState) => state.curriculum);

  useEffect(() => {
    dispatch(getCurriculumUserId((curriculumState.curriculum?.userId as string)));
  }, [dispatch]);

  const handleCreate = () => {
    const newCurriculum: CurriculumModel = {
      ...curriculumState.curriculum,
    };
    dispatch(createCurriculum(newCurriculum));
  };

  const handleUpdate = () => {
    if (curriculumState.curriculum) {
      const updatedCurriculum: CurriculumModel = {
        ...curriculumState.curriculum,
      };
      dispatch(updateCurriculum(updatedCurriculum));
    }
  };

  if (curriculumState.status === "loading") {
    return <div>Loading...</div>;
  }

  if (curriculumState.status === "failed") {
    return <div>Error: {curriculumState.error}</div>;
  }

  return (
    <div>
      <h1>Curriculum</h1>
      <button onClick={handleCreate}>Create Curriculum</button>
      <button onClick={handleUpdate}>Update Curriculum</button>
      {curriculumState.curriculum && (
        <div>
          <Curriculum />
        </div>
      )}
    </div>
  );
};

export default CurriculumComponent;
