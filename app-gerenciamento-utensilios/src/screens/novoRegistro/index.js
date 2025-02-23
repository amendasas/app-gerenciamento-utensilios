import { StyleSheet, View, ScrollView} from 'react-native';

import Title from './../../components/title'
import Main from './components/main';

export default function NovoRegistro() {
  return (
    <View style={styles.container}>
      <Title title='Novo Registro' subTitle='Informe sobre a última utilização'/>
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