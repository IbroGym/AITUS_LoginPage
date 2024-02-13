import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Login from './components/Login';
import Password from './components/Password';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <Password />
        <View>
          <Image style = {styles.logo} source = {require('./assets/aitu-logo-2-600x315.png')}/>

          <TouchableOpacity onPress = {() => console.log("Forgot your password? pressed")}>
            <Text style = {styles.hyperlink}>Forgot your password?</Text>
          </TouchableOpacity>

          <Button title = {'Sign in'} onPress = {() => console.log("Sign in pressed")}/>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    opacity: 0.5, 
    top: -280,
    width: 279,
    height: 124
  },

  hyperlink: {
    color: '#1E90FF',
    opacity: 0.5,
    top: -110,
    left: -20
  }
});
