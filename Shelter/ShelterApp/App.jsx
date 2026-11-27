import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/Home';
import DogsScreen from './pages/Dogs';
import AboutScreen from './pages/About';
import DogDetailsScreen from './pages/DogDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

function DogsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dogs"
        component={DogsScreen}
        options={{ title: 'DOGS' }}
      />
      <Stack.Screen
        name="DogDetails"
        component={DogDetailsScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="DOGS"
        component={DogsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paw" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="INFO"
        component={AboutScreen}
        options={{
          title: 'INFO',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
