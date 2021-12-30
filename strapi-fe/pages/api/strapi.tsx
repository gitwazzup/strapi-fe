import axios from 'axios';

export interface StrapiAPIResponse {
  data: Data[];
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Meta {
  meta: Pagination;
}

interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export const API_URL = 'http://localhost:1337/api';

/** returns jwt token */
export async function authenticateUser(): Promise<string> {
  const url = `${API_URL}/auth/local`;
  const data = {
    identifier: 'erik',
    password: 'erikerik',
  };
  return axios.post(url, data).then((resp) => resp.data.jwt);
}
