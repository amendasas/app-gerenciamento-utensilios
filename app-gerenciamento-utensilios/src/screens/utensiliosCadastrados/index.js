import { StyleSheet, View} from 'react-native';

import Title from './../../components/title'
import Main from './components/main';



export default function UtensiliosCadastrados() {
  return (
    <View style={styles.container}>
      <Title title='Itens Cadastrados' subTitle='Procure por um utensílio cadastrado'/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    flex: 1,
  },
});