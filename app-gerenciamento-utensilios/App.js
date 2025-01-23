import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './src/pages/telaInicial/';
import CadastroUtensilio from './src/pages/cadastroUtensilio/';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      {/* Stack que armazena as telas do aplicativo */}
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroUtensilio" component={CadastroUtensilio} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};