import axios, { AxiosResponse } from 'axios';
import { StrapiAPIResponse, API_URL } from './strapi';

export type FormAPIReponse = StrapiAPIResponse & {
  data: {
    attributes: FormAttributes;
  };
};

export interface FormAttributes {
  type: string;
  label: string;
  options: string;
  required: boolean;
}

export async function getForm(form: string): Promise<FormAPIReponse> {
  const url = `${API_URL}/${form}s`;
  return (await axios.get<FormAPIReponse, AxiosResponse>(url)).data;
}
