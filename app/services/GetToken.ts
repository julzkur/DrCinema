export class TokenService {
  
  fetchToken = async (): Promise<any> => {
    const creds = "drcinema25:group_25";
    const base64Creds = btoa(creds);
  
    const response = await fetch("https://api.kvikmyndir.is/authenticate", {
      method: "POST",
      headers: { "Authorization": `Basic ${base64Creds}` }
    });
    
    const token = await response.json();
    return token;
  }
}

export default TokenService;

