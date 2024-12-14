# Dr. Cinema
# Assignment 3 MAPP

## Description

Dr. Cinema is an application designed to display movied that are currently playing in cinemas.
The app allows users to browse through cinemas and see what movies each of them are playing, see the deatails and showtimes of each movie at the corresponding cinema and buy tickets for each showtime. The user can also browse through upcoming movies and watch their trailers if they have one.
It supports both iOS and Android platforms.

This is for iOS/Android, not supported by Web.

## Extras

The application allows you to call a specific cinema by pressing on its phone number on the cinema´s detail page.

The application allows you to look up a cinemas address on www.ja.is by pressing on the address on the cinema´s detail page.

## Running the App

#### Prerequisites

Before setting up the project, ensure you have the following installed:
Ensure you are using correct version of Expo Go, Expo SDK

- Node.js (v.20+)
- npm (Node Package Manager)
- React Native CLI
- Expo CLI

Open terminal and navigate into the root directory

```bash
cd DrCinema
```

Install all necessary dependencies by running:

```bash
npm install
```

To run the application, use the following command:

```bash
npm start 
```

This will start the Expo development server.


If you're running the app on a Simulator/Emulator, you can use the following commands:
    
- iOS: 
    ```bash
    npx expo start --ios
    ```
- Android: 
    ```bash
    npx expo start --android
    ```

## Known Issues

If you experience issues from the get-go, analyze the error and try running these commands to install necessary libraries independently:

npm install @react-navigation/native

npm install @react-navigation/stack

npm install -g expo-cli

npm install @reduxjs/toolkit react-redux

npm install axios

npm install react-native-webview

npm install react-native-youtube-iframe

npm install react-native-dotenv


## Technologies used

    React Native
    React Navigation
    React Youtube iframe
    Redux
    Axios
    Expo Router
    api.kvikmyndir.is

## Platform Support

### Primary Development Platform
    - iOS/Android
    - Test devices: web, Samsung Galaxy S20 FE, iPhone 12 Pro
    - Web support: via Expo web support (although not available with FileSystems)
    - Tested OS: macOS, Windows, Android, iOS
