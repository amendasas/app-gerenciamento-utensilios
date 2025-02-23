import { StyleSheet, View} from 'react-native';

import Title from '../../components/title'
import Main from './components/main';



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
    backgroundColor: '#1E1E1E',
    flex: 1,
    justifyContent: 'center',
  },
});