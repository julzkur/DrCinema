$plainText = "drcinema25:group_25"
$base64Encoded = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($plainText))
$headers = @{Authorization = "Basic $base64Encoded"}
$response = Invoke-WebRequest -Uri "https://api.kvikmyndir.is/authenticate" -Method POST -Headers $headers
$response.Content | Out-File "$PSScriptRoot\..\resources\apiToken.json"