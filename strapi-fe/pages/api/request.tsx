import axios, { AxiosResponse } from 'axios';
import { StrapiAPIResponse, API_URL } from './strapi';
import { authenticateUser } from './strapi';

export type RequestAPIResponse = StrapiAPIResponse & {
  data: {
    attributes: RequestAttributes;
  };
};

interface RequestAttributes {
  name: string;
  body: string;
}

export async function getContent(collection: string): Promise<RequestAPIResponse> {
  const url = `${API_URL}/${collection}s`;
  return (await axios.get<RequestAPIResponse, AxiosResponse>(url)).data;
}

export async function postContent(
  collection: string,
  data: RequestAttributes
): Promise<AxiosResponse> {
  const url = `${API_URL}/${collection}s`;
  const response = await authenticateUser().then((token: string) =>
    axios.post(url, { data }, { headers: { Authorization: `Bearer ${token}` } })
  );
  return response;
}
