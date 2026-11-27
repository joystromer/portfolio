import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { dogPhotos } from '../utils/dogPhotos';

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [chosenDog, setChosenDog] = useState(null);

  const fetchDog = async () => {
    try {
      const response = await fetch('http://localhost:3000/dogs');
      const json = await response.json();

      const dogs = json;
      const chosen = dogs[Math.floor(Math.random() * dogs.length)];

      setChosenDog(chosen);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const dogClick = (dog) => {
    /*     navigation.navigate('DOGS');
    setTimeout(() => {
      navigation.navigate('DogDetails', dog);
    }, 0); */
    navigation.navigate('DOGS', {
      screen: 'DogDetails',
      params: dog,
      initial: false,
    });
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <View style={styles.view}>
      <Text style={[styles.heading, { fontSize: 25 }]}>
        Give a dog a forever home
      </Text>
      <Text style={styles.text}>
        Browse dogs available for adoption and learn more about each one. Find a
        dog that matches your lifestyle and take the first step toward a new
        life long commited companion.
      </Text>
      <Text style={[styles.heading, { fontSize: 20 }]}>
        Find your best friend
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        chosenDog && (
          <Pressable onPress={() => dogClick(chosenDog)}>
            <Image source={dogPhotos[chosenDog.name]} />
            <Text style={styles.name}>{chosenDog.name}</Text>
          </Pressable>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
  },
  heading: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 20,
    paddingBottom: 15,
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 500,
    paddingTop: 10,
  },
});
