import { exec } from 'child_process';


exec(`powershell -ExecutionPolicy Bypass -File "${__dirname}\\tokenGenerator.ps1"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing PowerShell script: ${error}`);
    console.error(`stderr: ${stderr}`);
    return;
  }
});