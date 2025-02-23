import { StyleSheet, View} from 'react-native';

import Color from './../../components/colors';
import Main from './components/main';
import Title from '../../components/title'



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
    backgroundColor: Color.background,
    flex: 1,
    justifyContent: 'center',
  },
});