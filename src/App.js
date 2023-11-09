import React from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions
} from 'react-native';
import ApnaCollege from './apnaCollege/index';
import SabkaPlayer from './apnaCollege/player';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,  
} from "@react-navigation/stack";
const d = Dimensions.get('window');
const linking = {
  prefixes: [
    'http://localhost:3000'
  ],
  config: {
    screens: {
      Home: 'home',
      ApnaCollege: {
        path: 'apnaCollege/:type'
      },
      SabkaPlayer: {
        path: 'sabkaPlayer/:id/:title'
      },
    },
  },
};
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const nav = (type) => {
    navigation.navigate('ApnaCollege', {
      type
    })
  }
  return (
    <View style={{ height: d.height, backgroundColor: '#000000' }}>
      <Pressable onPress={() => nav('JAVA')} style={{ height: 70, justifyContent: 'center', backgroundColor: '#242424', paddingLeft: 20 }}>
        <Text style={{ fontSize: 20, color: '#c7c7c7', fontWeight: 'bold' }}>Java Course</Text>
      </Pressable>
      <Pressable onPress={() => nav('WEB')} style={{ height: 70, justifyContent: 'center', backgroundColor: '#242424', paddingLeft: 20 }}>
        <Text style={{ fontSize: 20, color: '#c7c7c7', fontWeight: 'bold' }}>Web Course</Text>
      </Pressable>
    </View>
  )
};
function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ApnaCollege" component={ApnaCollege} />
        <Stack.Screen name="SabkaPlayer" component={SabkaPlayer} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
