import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Pressable,
  Text,
  Image,
} from 'react-native';
import { dogPhotos } from '../utils/dogPhotos';

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDogs = async () => {
    try {
      const response = await fetch('http://localhost:3000/dogs');
      const json = await response.json();
      console.log(json.dogs);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const dogClick = (dog) => {
    navigation.navigate('DogDetails', dog);
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 18 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ _id }) => _id}
            numColumns={3}
            renderItem={({ item }) => (
              <Pressable onPress={() => dogClick(item)} style={{ flex: 1 }}>
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                >
                  <Image
                    source={dogPhotos[item.name]}
                    style={{ width: 100, height: 138 }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
}
