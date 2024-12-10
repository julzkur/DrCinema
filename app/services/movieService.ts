import { TokenService } from "./GetToken";
import * as FileSystem from 'expo-file-system';


const TOKEN_DIR = FileSystem.documentDirectory + 'token/';


const getToken = async () => {
  (async () => {
    const tokenService = new TokenService();
    await tokenService.ensureDirectory();
    const success = await tokenService.fetchAndStoreToken();
    console.log(success ? "Token fetched and stored." : "Failed to fetch token.");
  })();
}

const getStoredTokenData = async (): Promise<{ success: boolean; message: string; token: string } | null> => {
  const path = TOKEN_DIR + "apiToken.json";
  const fileInfo = await FileSystem.getInfoAsync(path);
  if (!fileInfo.exists) {
    return null;
  }
  const content = await FileSystem.readAsStringAsync(path);
  const parsedContent = JSON.parse(content);
  console.log(parsedContent.success);
  console.log(parsedContent.message);
  console.log(parsedContent.token);
  return parsedContent;
}