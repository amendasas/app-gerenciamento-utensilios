import { StyleSheet, View} from 'react-native';

import Main from './components/main';
import Title from '../../components/title'
import Color from './../../components/colors';



export default function CadastroUtensilio() {
  return (
    <View style={styles.container}>
      <Title title='Cadastro de Utensílio' subTitle='PREENCHA AS INFORMAÇÕES DO UTENSÍLIO'/>
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