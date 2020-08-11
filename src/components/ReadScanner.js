import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import { Button } from 'react-native-elements';

import ClearButton from "./ClearButton"
import SolidButton from "./SolidButton"


const ReadScanner = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.onPress();
    props.onQRCode(data);
  };

  if (hasPermission === null) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}><ActivityIndicator size={'large'} color={'purple'} /></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (

    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
        style={
          {
            position: 'absolute',
            left: 10,
            right: 10,
            top: 100,
            bottom: 100,
          }
        }
      >
        <View style={{ marginTop: 150, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>Aponte para o QRCode</Text>
        </View>
      </BarCodeScanner>
      <View style={{
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <ClearButton onPress={props.onPress} title="Sair" />
        {
          scanned &&
          <SolidButton title={'Scannear Novamente'} onPress={() => setScanned(false)} />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: '#001435',
    paddingBottom: 20
  },
  text: {
    color: '#EAEAEA',
    fontSize: 28,
  }
})
export default ReadScanner;