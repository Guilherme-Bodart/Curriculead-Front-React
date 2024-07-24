import axios from 'axios';
import { Curriculum } from '../../types';

const endpoint = 'https://curriculead-back.vercel.app';
const urlCurriculum = '/curriculum/';
const urlCurriculumUrl = '/auth/curriculum/';

const getToken = () => localStorage.getItem('JWT_TOKEN');

export const createCurriculum = async (curriculum: Curriculum) => {
  const token = getToken();
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  const url = `${endpoint}${urlCurriculum}`;
  return axios.post(url, curriculum, { headers });
};

export const updateCurriculum = async (curriculum: Curriculum) => {
  const token = getToken();
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  const url = `${endpoint}${urlCurriculum}${curriculum._id}`;
  return axios.put(url, curriculum, { headers });
};

export const getCurriculumUserId = async (userId: string) => {
  const token = getToken();
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  const url = `${endpoint}${urlCurriculum}${userId}`;
  return axios.get(url, { headers });
};

export const getCurriculumUrl = async (urlCurriculum: string) => {
  const url = `${endpoint}${urlCurriculumUrl}${urlCurriculum}`;
  return axios.get(url);
};