import React from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const TrailerScreen = () => {
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'84WIaK3bl_s'} 
      />
    </View>
  );
};

export default TrailerScreen