import axios, { AxiosInstance, AxiosResponse } from "axios";


class AxiosAPI {
  private apiClient: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 1000,
      method: "GET",
      headers: {
        "x-access-token": this.token,
        Accept: "application/json",
      },
    });
  }

  public async refreshToken(): Promise<void> {
    try {
      const creds = "drcinema25:group_25";
      const base64Encoded = btoa(creds);
      const response = await axios.post(
        "https://api.kvikmyndir.is/authenticate",
        null,
        {
          headers: {
            Authorization: `Basic ${base64Encoded}`,
          },
        }
      );

      if (response.data?.token) {
        this.token = response.data.token;
      } else {
        throw new Error("failed to get token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  async fetchData(endpoint: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await this.apiClient.get(endpoint);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            // invalid or expired, get new token
            await this.refreshToken();
            return this.fetchData(endpoint); // retry the request with a new token
          } else if (error.response?.status === 404) {
            console.error(
              "404 Not Found: Invalid endpoint or resource unavailable."
            );
          } else {
            console.error("Axios error:", error.message, error.response?.data);
          }
        } else {
          console.error("Unexpected error:", error);
        }
        throw error;
      }
    }
  }
}

export default AxiosAPI;
