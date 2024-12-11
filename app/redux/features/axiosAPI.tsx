import axios, { AxiosInstance, AxiosResponse } from 'axios';

class AxiosAPI{
  private apiClient: AxiosInstance;

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
      const response: AxiosResponse<any> = await this.apiClient.get(endpoint);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async get(endpoint:string): Promise<any> {
    const response = await axios.get<{ id: number; name: string }>(`https://api.kvikmyndir.is/movies`);
    console.log(response.data);
    return;
  }
}


export default AxiosAPI;