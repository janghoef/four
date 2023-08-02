import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home';
import Order from './src/Order';
import { HeaderShown } from '@react-navigation/stack';
import Pizza from './src/Pizza';
import Zinger from './src/Zinger';
import Deal from './src/Deal';
import Deal2 from './src/Deal2';
import Touch from './src/Touch';
import Give from './src/Give';
import Choose from './src/Choose';

const App = () =>{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="home" component={Home} screenOptions={HeaderShown}/>
        <Stack.Screen name="Order" component={Order}/>
        <Stack.Screen name="pizza" component={Pizza}/>
        <Stack.Screen name="zinger" component={Zinger}/>
        <Stack.Screen name="deal" component={Deal}/>
        <Stack.Screen name="deal2" component={Deal2}/>
        <Stack.Screen name="touch" component={Touch}/>
        <Stack.Screen name="give" component={Give}/>
        <Stack.Screen name="choose" component={Choose}/>
        
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App