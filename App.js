import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Homescreen from './screens/Homescreen';
import Calorie from './screens/Calorie';
import Map from './screens/Map';
import OneDay from './screens/OneDay';
import OneMonth from './screens/OneMonth';
import OneYear from './screens/OneYear';
import Register from './screens/Register';
import Tracker from './screens/Tracker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Stack=createNativeStackNavigator();
const BottomTabs= createBottomTabNavigator();



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Welcome to PetCal" component={Onboarding}  />
          <Stack.Screen options={{headerShown:false}} name="homescreen" component={Homescreen}/>
          <Stack.Screen name="calorie" component={Calorie}/>
          <Stack.Screen name="map" component={Map}/>
          <Stack.Screen name="1 day" component={OneDay}/>
          <Stack.Screen name="1 month" component={OneMonth}/>
          <Stack.Screen name="1 year" component={OneYear}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="tracker" component={Tracker}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
