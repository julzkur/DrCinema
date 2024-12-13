import React from 'react';
import { View, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const TrailerScreen = ({ trailerId }: { trailerId: string }) => {
  
  
  if (trailerId === "No trailer found"){
    Alert.alert('Error', 'No trailer found');
    return;
  }
  
  console.log(`trailerId: ${trailerId}`);
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={trailerId} 
      />
    </View>
  );
};

export default TrailerScreen