import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FAB, Text, Modal, Portal, PaperProvider, IconButton, ProgressBar, Icon } from 'react-native-paper';
import Badge from '../components/badge';

export default () => {
    // Camera states
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState<boolean>(false);
    // Modal state
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
  
    if (!permission) {
      return <View />;
    }
  
    if (!permission.granted) {
        requestPermission();
    }
  
    const toggleCameraFacing = () => {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const handleScanned = ({type, data}: { type: string, data: string }) => {
        setScanned(true);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
        setScanned(false);
    }
  
    return (
      <View style={styles.container}>
        <PaperProvider>
            <FAB
                style={styles.fab}
                icon="sync"
                onPress={toggleCameraFacing}
            />
            <CameraView 
                style={styles.camera} 
                facing={facing} 
                onBarcodeScanned={scanned ? undefined : handleScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"]
                }}
            >
                <View style={styles.qrScanner}/>
                <Text variant="bodyLarge" style={{color: "white"}}>Fit the QR Code</Text>
            </CameraView>
            <Portal>
                <Modal 
                    visible={isModalVisible} 
                    onDismiss={closeModal} 
                    contentContainerStyle={styles.modal}
                    >
                    <Text variant='headlineSmall' style={{textAlign: 'center', fontWeight: 'bold'}}>New Location Discovered !</Text>
                    <Text variant='titleMedium' style={{marginTop: "18%", textAlign: 'center'}}>New Badge</Text>
                    <View style={{alignSelf: "center", marginBottom: "1%"}}><Badge icon={<Icon source={"graph"} size={50} color='white'/>} color='green'/></View>
                    <Text variant='titleLarge' style={{marginBottom: "8%", textAlign: 'center'}}>Network Explorer</Text>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "4%", marginHorizontal: "6%",
                        justifyContent: 'space-between'
                    }}>
                        <Text variant='titleLarge' style={{fontWeight: "bold"}}>Lvl 12</Text>
                        <Text variant='titleLarge' style={{}}>(1925 <Text variant='titleLarge' style={{color: "blue"}}>+ 125</Text> /6300)</Text>
                    </View>
                    <ProgressBar progress={0.3} color="blue" style={{
                        width: "85%",
                        alignSelf: "center",
                        borderRadius: 50,
                        height: 8,
                        marginTop: "1%"
                    }}/>
                    <IconButton 
                        icon='close' 
                        iconColor='red'
                        size={24}
                        style={{ alignSelf: 'center', bottom: "12%", position: 'absolute',
                            borderColor: 'red', borderWidth: 2, borderStyle: 'solid'
                         }} 
                        onPress={closeModal}
                    />
                </Modal>
            </Portal>
        </PaperProvider>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fab: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginBottom: 10,
        right: 10,
        bottom: 0,
        zIndex: 99
    },
    qrScanner: {
        width: '50%',
        aspectRatio: '1/1',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white'
    },
    modal: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width,
        minHeight: Dimensions.get('screen').height + (Dimensions.get('screen').height * 0.1),
        alignSelf: 'center',
        display: 'flex'
    }
});