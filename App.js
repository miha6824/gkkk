import * as React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SocialIcon } from 'react-native-elements';

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://cdn.glitch.global/5a80362a-7aa4-4fab-93bb-d7dd9fab0547/8140%201.png?v=1721038090058' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://cdn.glitch.global/5a80362a-7aa4-4fab-93bb-d7dd9fab0547/Group.png?v=1721038139540' }} 
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.welcomeText}>to our store</Text>
        <Text style={styles.subText}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// SignInScreen component
const SignInScreen = () => {
  return (
    <View style={signInStyles.container}>
      <StatusBar barStyle="dark-content" />
      <Image 
        source={{ uri: 'https://cdn.glitch.global/5a80362a-7aa4-4fab-93bb-d7dd9fab0547/Mask%20Group.png?v=1721041589241' }} 
        style={signInStyles.image} 
      />
      <View style={signInStyles.content}>
        <Text style={signInStyles.title}>Get your groceries{'\n'}with nectar</Text>
        <View style={signInStyles.inputContainer}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/5a80362a-7aa4-4fab-93bb-d7dd9fab0547/Rectangle%2011.png?v=1721041585531' }} 
            style={signInStyles.flag} 
          />
          <Text style={signInStyles.phoneCode}>+880</Text>
          <TextInput style={signInStyles.textInput} keyboardType="phone-pad" />
        </View>
        <Text style={signInStyles.orText}>Or connect with social media</Text>
        <View style={signInStyles.socialContainer}>
          <TouchableOpacity style={[signInStyles.socialButton, signInStyles.googleButton]}>
            <SocialIcon
              title='Continue with Google'
              button
              type='google'
              style={[signInStyles.socialIcon, signInStyles.googleIcon]}
              iconColor="#fff"
              underlayColor="#87CEEB"
            />
          </TouchableOpacity>
          <TouchableOpacity style={signInStyles.socialButton}>
            <SocialIcon
              title='Continue with Facebook'
              button
              type='facebook'
              style={signInStyles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles for HomeScreen
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 35,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: 353,
    height: 67,
    backgroundColor: 'green',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

// Styles for SignInScreen
const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
  },
  flag: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  phoneCode: {
    fontSize: 16,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
    textAlign: 'center',
  },
  socialContainer: {
    width: '100%',
  },
  socialButton: {
    marginBottom: 10,
  },
  socialIcon: {
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10,
  },
  googleButton: {
    backgroundColor: '#6495ED',
  },
  googleIcon: {
    backgroundColor: '#6495ED',
  },
});

export default App;
