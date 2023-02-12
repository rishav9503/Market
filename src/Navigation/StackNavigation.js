import React from 'react';
import Login from '../Views/Login'
import Splash from '../Views/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthStack=()=>(
 <Stack.Navigator
    screenOptions={{
        headerShown: false
      }} initialRouteName="Splash"
    >
        <Stack.Screen component={Splash} name={'Splash'} />
        <Stack.Screen  component={Login}  name={'Login'}/>
    </Stack.Navigator>
   
)



const NavigationStack = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Auth">
        <Stack.Screen  name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default NavigationStack;