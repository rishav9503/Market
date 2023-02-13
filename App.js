/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
 
  StatusBar,
  StyleSheet,
  useColorScheme,
  SafeAreaView
} from 'react-native';
import * as eva from '@eva-design/eva';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import { ApplicationProvider,  Drawer, DrawerItem, IndexPath, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/Views/Login';
import Splash from './src/Views/Splash';
import { default as theme } from './custom-theme.json'; // <-- Import app theme
import Landing from './src/Views/Landing';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Market from './src/Views/Market';
import ChartPage from './src/Views/ChartPage'
const Stack = createNativeStackNavigator();
const { Screen, Navigator } = createDrawerNavigator()


function App() {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: Colors.darker

  };
  const AuthStack = ({ }) => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }} initialRouteName="Splash"
    >
      <Stack.Screen component={Splash} name={'Splash'} />
      <Stack.Screen component={Login} name={'Login'} />
    </Stack.Navigator>

  )

  const DrawerContent = ({ navigation, state }) => (
    <Drawer
      headerShown
      drawerActiveBackgroundColor={'#EAFBD6'}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title='Home' />
      <DrawerItem title='Market' />
    </Drawer>
  );
  const MarketStack = ({ navigation, state }) => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }} initialRouteName="MarketPage"
    >
       <Stack.Screen component={Market} name={'MarketPage'} />
      <Stack.Screen component={ChartPage} name={'Chart'} />
     
    </Stack.Navigator>
  )
  const DrawerNavigator = () => (
    <Navigator screenOptions={{
      headerShown: false,
      drawerPosition: "right",
    }} drawerContent={props => <DrawerContent {...props} />}>

      <Screen name='Home' component={Landing} />
      <Screen name="Market" component={MarketStack} />
    </Navigator>
  );




  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider  {...eva} theme={{ ...eva.light, ...theme }}>

        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor='#EAFBD6' />
          <NavigationContainer>

            <Stack.Navigator screenOptions={{
              headerShown: false

            }} initialRouteName="Auth">
              <Stack.Screen name="Auth" component={AuthStack} />
              <Stack.Screen
                name="Home" component={DrawerNavigator} />
               
            </Stack.Navigator>
          </NavigationContainer>

        </SafeAreaView>


      </ApplicationProvider>
    </>


  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;



