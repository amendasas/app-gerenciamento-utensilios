import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';  // Importe as rotas do arquivo routes.js

export default function App() {
  return (
    <NavigationContainer>
      <Routes />  {/* Usando o componente Routes aqui */}
    </NavigationContainer>
  );
}
