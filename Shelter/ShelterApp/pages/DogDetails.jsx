import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { dogPhotos } from '../utils/dogPhotos';

export default function HomeScreen({ navigation, route }) {
  const dogs = route.params;
  if (!dogs) {
    return <Text>No data</Text>;
  }

  const adoptClick = (about) => {
    navigation.navigate('INFO');
  };

  return (
    <View style={styles.view}>
      <Image source={dogPhotos[dogs.name]} style={styles.image} />
      <Text style={[styles.text, styles.bold, styles.heading]}>
        {dogs.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Breed: </Text>
        {dogs.breed}
        {'\n'}
        <Text style={styles.bold}>Coat: </Text>
        {dogs.color}
        {'\n'}
        <Text style={styles.bold}>Age in years: </Text>
        {dogs.age}
        {'\n'}
        <Text style={styles.bold}>Previous Homes: </Text>
        {dogs.previousHomes}
        {'\n'}
        <Text style={styles.bold}>Child safe: </Text>
        {dogs.childSafe ? 'Yes' : 'No'}
      </Text>
      <View style={styles.spacing}>
        <Pressable
          onPress={() => adoptClick()}
          style={({ pressed }) => [
            styles.buttonContainer,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>APPLY FOR ADOPTION</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 15,
    paddingBottom: 2,
    textAlign: 'left',
    color: 'black',
  },
  image: {
    width: 250,
    height: 355,
    paddingBottom: 15,
  },
  heading: {
    fontSize: 20,
    paddingBottom: 10,
  },
  bold: {
    fontWeight: 600,
  },
  buttonContainer: {
    backgroundColor: '#858585',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 600,
  },
  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },
  spacing: {
    padding: 30,
  },
});
