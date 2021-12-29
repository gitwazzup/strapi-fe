import axios, { AxiosResponse } from 'axios';

interface Attributes {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface RequestAttributes {
  name: string;
  body: string;
}

interface AllAttributes extends Attributes, RequestAttributes {}
export interface APIResponse {
  data: {
    id: number;
    attributes: AllAttributes[];
  };
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export async function getContent(collection: string): Promise<APIResponse> {
  const url = `http://localhost:1337/api/${collection}s`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function postContent(
  collection: string,
  data: RequestAttributes
): Promise<AxiosResponse> {
  const url = `http://localhost:1337/api/${collection}s`;
  const response = await authenticateUser().then((token: string) =>
    axios.post(url, { data }, { headers: { Authorization: `Bearer ${token}` } })
  );
  return response;
}

/** returns jwt token */
export async function authenticateUser(): Promise<string> {
  const url = 'http://localhost:1337/api/auth/local';
  const data = {
    identifier: 'erik',
    password: 'erikerik',
  };
  return axios.post(url, data).then((resp) => resp.data.jwt);
}
