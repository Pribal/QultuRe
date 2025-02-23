import { StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LocationSearch } from '../hooks/search';
import { TextInput } from 'react-native-paper';
import { useState, useRef } from 'react';
import { BottomSheetMethods } from '@devvie/bottom-sheet';
import { CustomBottomSheet } from '../components/bottomSheet';

const markers = [
  {
	id: 0,
	title: "Pub St Germain",
	image: 'https://pubsaintgermain.com/sites/default/files/styles/desktop_2048/public/ambiances/PSG-COCKTAILBAR-1.jpg?itok=tl3j146q',
	description: 'Pub gastronomique chic agrémenté de végétation et de murs en briques, proposant des buffets de brunch et des repas toute la journée.',
	coords: {
	  lat: 48.853084564208984,
	  long: 2.338632822036743
	}
  },
  {
	id: 1,
	title: "SOCOA - Bar a Tapas",
	image: 'https://focus.telerama.fr/2023/09/07/485/0/11648/7765/1600/1067/60/0/c1fb587_1694104867475-dscf8676.jpg',
	description: 'Tapas Basques Espagnoles et Françaises, servis dans un cadre contemporain et design avec terrasse.',
	coords: {
	  lat: 48.82391357421875,
	  long: 2.3645265102386475
	}
  },
  {
	id: 2,
	title: "Baker Street Pub",
	image: 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/549/1500x750/393265.jpg',
	description: 'Pub tendance de style britannique servant bières et cocktails dans un cadre original aux murs en pierre.',
	coords: {
	  lat: 48.84590148925781,
	  long: 2.3530852794647217
	}
  },
];

export default function () {
	const bottomSheetRef = useRef<BottomSheetMethods>(null);
	const [markerData, setMarkerData] = useState({ title: '', image: '', description: '' });
	const [searchQuery, setSearchQuery] = useState('');
	const [region, setRegion] = useState({
		latitude: 48.8153577,
		longitude: 2.363373,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})
  
	const handleLocationSearch = async () => {
		const res = await LocationSearch(searchQuery);
	
		if(!res) {
			return;
		}
	
		const {lat, long} = res;

		const deltaLat = (Math.random() - 0.5) * (5 / 111);
		const deltaLong = (Math.random() - 0.5) * (5 / (111 * Math.cos(lat * Math.PI / 180)));
	
		setRegion({latitude: lat, longitude: long, latitudeDelta: deltaLat, longitudeDelta: deltaLong });
	}

	const handleBottomSheet = (id: number) => {
		const markerSelected = markers[id];
		setMarkerData({ title: markerSelected.title, image: markerSelected.image, description: markerSelected.description });
		bottomSheetRef.current?.open();
	}

	return (
	<>
		<MapView 
			style={styles.map}
			initialRegion={region}
		>
		{markers.map((marker) => (
			<Marker
				onPress={() => handleBottomSheet(marker.id)}
				key={marker.id}
				coordinate={{
					latitude: marker.coords.lat,
					longitude: marker.coords.long,
				}}
			/>
		))}
		</MapView>

		<TextInput
			placeholder='Search'
			left={<TextInput.Icon icon="magnify" color="black"/>}
			value={searchQuery}
			onChangeText={text => setSearchQuery(text)}
			style={styles.search}
			mode='outlined'
			theme={{roundness: 50}}
			onSubmitEditing={handleLocationSearch}
		/>

		<CustomBottomSheet innerRef={bottomSheetRef} markerData={markerData} />
	</>
	)
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
		zIndex: 20,
		position: "absolute",
		width: "90%",
		alignSelf: "center",
		marginTop: "11%",
		borderWidth: 0
	}
});