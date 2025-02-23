import { BottomNavigation } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FAB } from 'react-native-paper';

import User from './pages/user';
import Map from './pages/map';
import Scan from './pages/scan';

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'map', title: 'Map', focusedIcon: 'map', unfocusedIcon: 'map-outline'},
    { key: 'scan', title: 'Scan QR', focusedIcon: 'qrcode-scan', unfocusedIcon: 'qrcode-scan'},
    { key: 'user', title: 'Profile', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: Map,
    scan: Scan,
    user: User,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: '100%'
  },
  search: {
    zIndex: 21,
    position: "absolute",
    width: "80%",
    alignSelf: "center",
    marginTop: "7%",
    borderWidth: 0
  }
});