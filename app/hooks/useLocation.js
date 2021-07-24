import * as Location from 'expo-location';
import {useState, useEffect} from 'react'


//Custom Hook-encapsulate state and logic around some state
//Use this to get the users location anywhere in the app
export default useLocation = () => {
  const [location, setLocation] = useState() 

  const getLocation = async() => {
    try {
      const {granted} = await Location.requestForegroundPermissionsAsync()
      if(!granted)return;
      const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync()
      setLocation({latitude, longitude})
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return location
}
