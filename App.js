import {StyleSheet, KeyboardAvoidingView, Platform,   } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from "./screens/HomeScreen"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import RideOptionsCards from './components/RideOptionsCards';

export default function App() { 
  const Stack = createNativeStackNavigator();

  return (

    <Provider store={store}>

      <KeyboardAvoidingView
       style={{flex:1}}
      //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      //  keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
       >
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }} 
            />
            <Stack.Screen name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }} 
            />
            <Stack.Screen name='RideOptionsCards'
              component={RideOptionsCards}
              options={{
                headerShown: false,
              }} 
            />
  
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

