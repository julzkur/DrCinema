import * as FileSystem from 'expo-file-system';


const TOKEN_DIR = FileSystem.documentDirectory + 'token/';

export class TokenService {
  async ensureDirectory() {
    const directoryExists = await FileSystem.getInfoAsync(TOKEN_DIR);
    if (!directoryExists.exists){ // vantadi, annars com bara finn ekki directory
      await FileSystem.makeDirectoryAsync(TOKEN_DIR, { intermediates: true})
    }
    console.log(FileSystem.documentDirectory);
  }
  
  fetchAndStoreToken = async (): Promise<boolean> => {
    const creds = "drcinema25:group_25";
    const base64Creds = btoa(creds);
  
    const response = await fetch("https://api.kvikmyndir.is/authenticate", {
      method: "POST",
      headers: { "Authorization": `Basic ${base64Creds}` }
    });
    
    const data = await response.json();
    const path = FileSystem.documentDirectory + "apiToken.json";
    await FileSystem.writeAsStringAsync(path, JSON.stringify(data));
    return data.success;
  }

}

