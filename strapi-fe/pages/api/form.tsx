import axios, { AxiosResponse } from 'axios';
import { StrapiAPIResponse, Data, Meta, API_URL, Attributes } from './strapi';

export interface FormAPIReponse extends StrapiAPIResponse {
  data: FormData[];
}

export interface FormData extends Data {
  attributes: FormAttributes;
}

export interface FormAttributes extends Attributes {
  type: string;
  label: string;
  options: string;
  required: boolean;
}

export enum FormType {
  'TEXT' = 'text',
  'TEXT_AREA' = 'textarea',
  'SELECT' = 'select',
  'DATE' = 'date',
  'EMAIL' = 'email',
}

export async function getForm(form: string): Promise<FormAPIReponse> {
  const url = `${API_URL}/${form}s`;
  return (await axios.get<FormAPIReponse, AxiosResponse>(url)).data;
}
