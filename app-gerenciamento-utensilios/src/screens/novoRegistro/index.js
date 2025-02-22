import { StyleSheet, View, ScrollView} from 'react-native';

import Title from './components/title';
import Main from './components/main';

export default function NovoRegistro() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title/>
      <Main/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    flex: 1,
  },
});