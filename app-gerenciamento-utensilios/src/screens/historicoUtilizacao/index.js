import { StyleSheet, View} from 'react-native';

import Title from './components/title';
import Main from './components/main';



export default function HistoricoUtilizacao() {
  return (
    <View style={styles.container}>
      <Title/>
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