import React from 'react';
import { ImageBackground, View, Button, StyleSheet, Image, Text} from 'react-native';
import AppButton from '../components/AppButton'
import colors from '../config/colors';

const WelcomeScreen = () => {
  return ( 
    <ImageBackground
    style={styles.background}
    source={require('../assets/background.jpg')}
    
    >
      <View style={styles.logoContainer}>
      
      <Image style = {styles.logo} source= {require('../assets/logo-red.png')}/>
      <Text> Sell What You Don't Need</Text>
      </View>
      <AppButton style={styles.button}>
      
      </AppButton>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
background:{
  flex: 1,
  justifyContent: "flex-end",
  alignItems: 'center'
},
button:{
  borderRadius: 5,
  color: 'red',
  width: '100%',
  height: 70
},
loginButton:{
width: "100%",
height: 70,
backgroundColor:"#fc5c65",
},
registerButton:{
  height: 70,
  width: '100%',
  backgroundColor: "#4ecdc4"
},
logo: {
width: 100,
height: 100,
},
logoContainer:{position: 'absolute',
top: 70,
alignItems: 'center'
}

})
export default WelcomeScreen;