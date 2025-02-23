import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroUtensilio from '../screens/cadastroUtensilio';
import HistoricoUtilizacao from '../screens/historicoUtilizacao';
import LeitorQRCode from '../screens/leitorQRCode';
import NovoRegistro from '../screens/novoRegistro';
import TelaInicial from '../screens/telaInicial';
import UtensiliosCadastrados from '../screens/utensiliosCadastrados';



const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen 
            name="CadastroUtensilio"
            component={CadastroUtensilio}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="HistoricoUtilizacao"
            component={HistoricoUtilizacao}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="LeitorQRCode"
            component={LeitorQRCode}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="NovoRegistro"
            component={NovoRegistro}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="TelaInicial"
            component={TelaInicial} 
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name="UtensiliosCadastrados"
            component={UtensiliosCadastrados}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}