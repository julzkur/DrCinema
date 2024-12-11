import axios, { AxiosInstance, AxiosResponse } from 'axios';

class AxiosAPI{
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    // Create an Axios instance
    this.apiClient = axios.create({
      baseURL,
      timeout: 100, 
      headers: {
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NTZlZjQzYWE2MjRlOTNlZTkyNDlhMiIsImlhdCI6MTczMzkxNzYzNiwiZXhwIjoxNzM0MDA0MDM2fQ.V839rJQQe4ORVaqX6nyZiCK3UpRbKYAdX3EEoYPBH6k',
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

  async get(): Promise<any> {
    const response = await axios.get<{ id: number; name: string }>('https://api.kvikmyndir.is/movies');
    console.log(response.data);
    return;
  }
}


export default AxiosAPI;