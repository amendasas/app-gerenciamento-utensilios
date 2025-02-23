import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import do Stack Navigator
import TelaInicial from '../screens/telaInicial';
import CadastroUtensilio from '../screens/cadastroUtensilio';
import LeitorQRCode from '../screens/leitorQRCode';
import UtensiliosCadastrados from '../screens/utensiliosCadastrados';
import HistoricoUtilizacao from '../screens/historicoUtilizacao';
import NovoRegistro from '../screens/novoRegistro';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen 
            name="TelaInicial"
            component={TelaInicial} 
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="CadastroUtensilio"
            component={CadastroUtensilio}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="LeitorQRCode"
            component={LeitorQRCode}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="UtensiliosCadastrados"
            component={UtensiliosCadastrados}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="HistoricoUtilizacao"
            component={HistoricoUtilizacao}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="NovoRegistro"
            component={NovoRegistro}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}
