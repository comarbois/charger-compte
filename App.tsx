import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import ItinirairesScreen from './screens/ItinirairesScreen';
import AgendaScreen from './screens/AgendaScreen';
import MapScreen2 from './screens/MapScreen2';
import GeoLocationCC from './screens/GeoLocationCC';



// https://tbg.comarbois.ma/projet_api

const Stack = createStackNavigator();

const HomeButton = () => {
  const navigation = useNavigation();

  const handleHome = async () => {
    try {
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleHome} style={styles.homeButton}>
      <Image
        source={require('./assets/home.png')} 
        style={styles.homeButtonImage}
      />
    </TouchableOpacity>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#FF0000', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => {
            // Only show the HomeButton if the current screen is not 'Home'
            if (route.name !== 'Home') {
              return <HomeButton />;
            }
          },
        })}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="GeoLocationCC" 
          component={GeoLocationCC} 
          options={{ title: '' }} 
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen2} 
          options={{ title: '' }} 
        />
        <Stack.Screen 
          name="Itiniraires" 
          component={ItinirairesScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="Agenda" 
          component={AgendaScreen} 
          options={{ title: '' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    marginRight: 10,
    padding: 10,
  },
  homeButtonImage: {
    width: 24,
    height: 24,
  },
});

export default App;
