import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { Image, View, ScrollView } from 'react-native';
import { Text, IconButton, Chip } from 'react-native-paper';

interface MarkerData {
    image: string;
    title: string;
    description: string;
}

export const CustomBottomSheet = ({ innerRef, markerData }: { innerRef: React.RefObject<BottomSheetMethods>, markerData: MarkerData }) => {
    return (
        <BottomSheet ref={innerRef} height={"60%"}>
            <ScrollView>
                <View style={{flexDirection: "row", justifyContent: 'space-between', marginHorizontal: "4%"}}>
                    <Text style={{marginLeft: "3%", marginVertical:"4%"}} variant='headlineSmall'>{markerData.title}</Text>
                    <IconButton 
                        icon='close' 
                        iconColor='black'
                        size={24}
                        style={{
                            backgroundColor: "lightgray", zIndex: 33
                        }} 
                        onPress={undefined}
                    />
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: "2%", justifyContent: "space-around", marginVertical:"3%", marginHorizontal: "8%"}}>
                    <Chip icon="party-popper" onPress={undefined}>Party Location</Chip>
                    <Chip icon="clock-check-outline" onPress={undefined}>Since 1889</Chip>
                </View>

                <Image
                    source={{
                        uri: markerData.image
                    }}
                    style={{ width: "90%", aspectRatio: "16/9", alignSelf: "center", borderRadius: 5 }}
                />

                <Text style={{ marginHorizontal: '7%', marginTop: '1%' }} variant='titleMedium'>{markerData.description}</Text>
            </ScrollView>
        </BottomSheet>
    )
}