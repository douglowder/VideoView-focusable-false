import { useVideoPlayer, VideoView } from 'expo-video';
import { Pressable, Text, TVFocusGuideView, View } from 'react-native';

export default function HomeScreen() {
  const player = useVideoPlayer({});
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable>
        {({ focused }) => (
          <View
            style={{
              backgroundColor: focused ? 'blue' : 'gray',
              padding: 10,
              margin: 20,
            }}
          >
            <Text style={{ color: focused ? 'white' : 'black' }}>
              {focused ? 'Focused' : 'Not Focused'}
            </Text>
          </View>
        )}
      </Pressable>
      <TVFocusGuideView autoFocus focusable={false}>
        <VideoView
          style={{
            height: 200,
            width: 200,
            borderColor: 'red',
            borderWidth: 1,
          }}
          player={player}
        />
      </TVFocusGuideView>
      <Pressable>
        {({ focused }) => (
          <View
            style={{
              backgroundColor: focused ? 'blue' : 'gray',
              padding: 10,
              marginTop: 20,
            }}
          >
            <Text style={{ color: focused ? 'white' : 'black' }}>
              {focused ? 'Focused' : 'Not Focused'}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}
