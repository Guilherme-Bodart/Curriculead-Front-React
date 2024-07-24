import { GenderEnum } from "./enums";

export interface User {
  _id: string;
  email: string;
  name: string;
  password: string;
  gender: GenderEnum;
  birthday: Date;
  phone: string;
  state: string;
  city: string;
  linkedin: string;
  github: string;
  curriculumId: string;
}

export interface Curriculum {
  _id: string;
  userId: string;
  url: string;
  academicEducation: Array<AcademicEducation>;
  extraCourses: Array<ExtraCourse>;
  language: Array<Language>;
  professionalExperience: Array<ProfessionalExperience>;
  skill: Array<Skill>;
  styleCurriculum: StyleCurriculum;
  aboutMe: string;
  hobby: Array<string>;
}

export interface AcademicEducation {
  courseName: string;
  schoolName: string;
  startDate: Date;
  endDate: Date;
}

export interface ExtraCourse {
  name: string;
  institution: string;
  description: string;
}

export interface ProfessionalExperience {
  responsibility: string;
  employer: string;
  office: string;
  description: string;
  startDate: Date;
  endDate: Date;
  currentPosition: boolean;
}

export interface Language {
  name: string;
  level: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface StyleCurriculum {
  name: string;
  color: string;
}
