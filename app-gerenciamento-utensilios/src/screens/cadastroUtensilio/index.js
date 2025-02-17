import { StyleSheet, ScrollView} from 'react-native';

import Title from './../../components/title'
import Main from './components/main';



export default function CadastroUtensilio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title title='Cadastro de Utensílio' subTitle='PREENCHA AS INFORMAÇÕES DO UTENSÍLIO'/>
      <Main/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    flexGrow: 1,
  },
});