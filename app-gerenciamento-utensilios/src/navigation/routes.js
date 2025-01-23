import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../screens/telaInicial';  // Importando TelaInicial
import CadastroUtensilio from '../screens/cadastroUtensilio';  // Importando CadastroUtensilio

const Stack = createStackNavigator();  // Criando o Stack Navigator

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TelaInicial" 
        component={TelaInicial} 
        options={{ headerShown: false }}  // Ocultando o header da tela
      />
      <Stack.Screen 
        name="CadastroUtensilio" 
        component={CadastroUtensilio} 
        options={{ headerShown: false }}  // Ocultando o header da tela
      />
    </Stack.Navigator>
  );
};

export default Routes;  // Exportando o componente Routes
