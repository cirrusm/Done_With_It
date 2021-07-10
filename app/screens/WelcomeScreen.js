import React from 'react';
import { ImageBackground, View, Button, StyleSheet, Image, Text} from 'react-native';
import AppButton from '../components/AppButton'
import colors from '../config/colors';

const WelcomeScreen = () => {
  return ( 
    <ImageBackground
    blurRadius={6}
    style={styles.background}
    source={require('../assets/background.jpg')}
    
    >
      <View style={styles.logoContainer}>
      
      <Image style = {styles.logo} source= {require('../assets/logo-red.png')}/>
      <Text style={styles.tagline}> Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="log in" onPress={() => console.log('button pressed')}>      
        </AppButton>
        <AppButton title="sign up" onPress={()=>console.log('sign up')} color="secondary"></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
background:{
  flex: 1,
  justifyContent: "flex-end",
  alignItems: 'center'
},
logo: {
width: 100,
height: 100,
},
logoContainer:{position: 'absolute',
top: 70,
alignItems: 'center'
},
buttonsContainer: {
  padding:20,
  width: '100%',
},
tagline: {
  fontSize: 25,
  fontWeight: '600',
  paddingVertical: 20,

}

})
export default WelcomeScreen;