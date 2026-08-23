import {StyleSheet, Text, View} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desene</Text>
      <Text style={styles.subtitle}>
        TEKNOFEST NSosyal Social Media Platform
      </Text>
      <Text style={styles.message}>
        Initial development environment is ready.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#172033',
    fontSize: 36,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 12,
    color: '#3F4A5A',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
    color: '#6B7280',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default HomeScreen;
