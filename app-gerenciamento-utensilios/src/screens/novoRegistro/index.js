import { StyleSheet, View } from 'react-native';

import Main from './components/main';
import Title from './../../components/title'
import Color from './../../components/colors';



export default function NovoRegistro() {
  return (
    <View style={styles.container}>
      <Title title="Novo Registro" subTitle={"Adicione um novo registro de uso para \no utensílio"} />
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