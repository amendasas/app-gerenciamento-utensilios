import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';



export default function App() {
  return (

    // Aqui importamos todos os componentes que fizemos para que seja possível aparecer na tela do App
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
  },
});
