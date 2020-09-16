import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Alert
} from 'react-native'

import Geolocation from '@react-native-community/geolocation'
import { Height, Width } from './src/lib/Dimensions'

function App() {
  const [Locate, setLocate] = useState({})

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLocate(info.coords))
  }, [])


  return (
    <>
      <StatusBar color='#fff' barStyle="dark-content" />
      <SafeAreaView>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
            coordinate={{
              "latitude": Locate.latitude,
              "longitude": Locate.longitude
            }}
            title={"Your Location"}
            draggable />
        </MapView>

        <View style={styles.wrapper}>
          <Text>
            {Locate.altitude}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Height / 1.1
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
