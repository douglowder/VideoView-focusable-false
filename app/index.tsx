import { useVideoPlayer, VideoView } from 'expo-video';
import { Pressable, Text, View } from 'react-native';


export default function HomeScreen() {
  const player = useVideoPlayer({})
  return (<>
    <View 
      importantForAccessibility="no-hide-descendants"
      style={{ pointerEvents: 'none', flex: 1 }}
    >
      <VideoView style={{flex: 1, height: 200, width: 200}} player={player} focusable={false} nativeControls={false} isTVSelectable={false} hasTVPreferredFocus={false}/>
    </View>
    
    <Pressable>
      {({focused}) => (
        <View style={{backgroundColor: focused ? 'blue' : 'gray', padding: 10, marginTop: 20}}>
          <Text style={{color: focused ? 'white' : 'black'}}>{focused ? 'Focused' : 'Not Focused'}</Text>
        </View>
      )}
    </Pressable>
  </>);
}

