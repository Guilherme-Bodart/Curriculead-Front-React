import React from "react";
import CurriculumDefault from "./CurriculumDefault";
import CurriculumRedDefault from "./CurriculumRedDefault";
import { CurriculumStyleEnum } from "../../features/enums";

export default function Curriculum() {
  const style = CurriculumStyleEnum.Default;
  return (
    <>
      {style == CurriculumStyleEnum.Default ? (
        <CurriculumDefault />
      ) : style == CurriculumStyleEnum.RedDefault ? (
        <CurriculumRedDefault />
      ) : (
        ""
      )}
    </>
  );
}
