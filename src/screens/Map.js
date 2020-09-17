import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import Geolocation from '@react-native-community/geolocation'
import { Height, Width } from '../lib/Dimensions'

function Map({ navigation }) {

  const [Locate, setLocate] = useState({
    latitude: 0,
    longitude: 0
  })

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(
      position => {
        setLocate(position.coords)
      }
    )
  }

  function HandleLogout() {
    navigation.navigate('Login')
  }


  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <>
      <SafeAreaView>
        <StatusBar color='#fff' />
        <MapView
          style={styles.map}
          loadingEnabled={true}
          followUserLocation={true}
          zoomEnabled={true}
          onRegionChangeComplete={region => setLocate(region)}
          showsMyLocationButton={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: Locate.latitude,
            longitude: Locate.longitude,
            latitudeDelta: 0.0041,
            longitudeDelta: 0.0021
          }} />

        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.button} onPress={HandleLogout}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Height
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'gray',
    width: Width / 3,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})

export default Map
