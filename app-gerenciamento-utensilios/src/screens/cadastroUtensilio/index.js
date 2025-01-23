import { View, Text, StyleSheet} from 'react-native';


export default function CadastroUtensilio() {
  return (
    <View style={styles.container}>
      <Text style={styles.destacarTexto}>Deu certo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Excluir depois que arrumar!!!
  destacarTexto: {
    color: "#FFF",
    fontSize: 64,
  }
});
