import axios, { AxiosInstance, AxiosResponse } from 'axios';
import TokenService from '@/app/services/GetToken';

class AxiosAPI {
  public apiClient: AxiosInstance;
  
  constructor(baseURL: string, token: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 1000,
      method: 'GET', 
      headers: {
        'x-access-token': token,
        'Accept': 'application/json',
      },
    });
  }

  async fetchData(endpoint: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await this.apiClient.get(endpoint);
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

export async function createAxiosAPI(baseURL: string): Promise<AxiosAPI> {
  const tokenService = new TokenService();
  
  const token = await tokenService.fetchToken();
  console.log(token.token);
  return new AxiosAPI(baseURL, token.token);
}