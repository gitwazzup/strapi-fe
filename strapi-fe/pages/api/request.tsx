export interface APIResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      body: string;
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
    }[];
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
