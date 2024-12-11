import axios, { AxiosInstance, AxiosResponse } from 'axios';

class AxiosAPI{
  public apiClient: AxiosInstance;

  constructor(baseURL: string) {
    // Create an Axios instance
    this.apiClient = axios.create({
      baseURL,
      timeout: 1000,
      method: 'GET', 
      headers: {
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NTZlZjQzYWE2MjRlOTNlZTkyNDlhMiIsImlhdCI6MTczMzkyNDA5NCwiZXhwIjoxNzM0MDEwNDk0fQ.yYNC9cZq95j2coGgosg_KhSRUwiq0FyQwUnwPpjbRlE',
        'Accept' : 'application/json',
      },
    });
  }

  async fetchData(endpoint: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await this.apiClient.get<{ id: number; name: string }>(endpoint);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }
}


export default AxiosAPI;