import * as React from 'react';
import { View, StyleSheet, Text, Platform, Permission, PermissionsAndroid, Alert } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken("pk.eyJ1IjoiaGFzc2VtbWVoYm9vYiIsImEiOiJja2IxM3JmbXAwOTE5MnRtaXE3ZnZyN2hpIn0.fcjB-cjoHzaiDJThwZDJHQ");
import Geolocation from '@react-native-community/geolocation';

const IS_ANDROID = Platform.OS === "android";
export interface mapsProps {
}

export interface mapsState {
}

export default class mapsComponent extends React.Component<mapsProps, mapsState> {
	
	map: any;
	// useEffect(() => {
	// 	const requestLocationPermission = async () => {
	// 	  if (Platform.OS === 'ios') {
	// 		getOneTimeLocation();
	// 		subscribeLocationLocation();
	// 	  } else {

	// 	  }
	// 	};
	// 	requestLocationPermission();
	// 	return () => {
	// 	  Geolocation.clearWatch(watchID);
	// 	};
	//   }, []);


	//   const getOneTimeLocation = () => {
	// 	setLocationStatus('Getting Location ...');
	// 	Geolocation.getCurrentPosition(
	// 	  //Will give you the current location
	// 	  (position) => {
	// 		setLocationStatus('You are Here');

	// 		//getting the Longitude from the location json
	// 		const currentLongitude = 
	// 		  JSON.stringify(position.coords.longitude);

	// 		//getting the Latitude from the location json
	// 		const currentLatitude = 
	// 		  JSON.stringify(position.coords.latitude);

	// 		//Setting Longitude state
	// 		setCurrentLongitude(currentLongitude);

	// 		//Setting Longitude state
	// 		setCurrentLatitude(currentLatitude);
	// 	  },
	// 	  (error) => {
	// 		setLocationStatus(error.message);
	// 	  },
	// 	  {
	// 		enableHighAccuracy: false,
	// 		timeout: 30000,
	// 		maximumAge: 1000
	// 	  },
	// 	);
	//   };
	constructor(props: mapsProps) {
		super(props);
		this.state = {
			initialCoords: undefined,
			currentCoordinates: [-73.98330688476561, 40.76975180901395],
			coordinates: [
				[-73.98330688476561, 40.76975180901395],
				[-73.96682739257812, 40.761560925502806],
				[-74.00751113891602, 40.746346606483826],
				[-73.95343780517578, 40.7849607714286],
				[-73.99017333984375, 40.71135347314246],
				[-73.98880004882812, 40.758960433915284],
				[-73.96064758300781, 40.718379593199494],
				[-73.95172119140624, 40.82731951134558],
				[-73.9829635620117, 40.769101775774935],
				[-73.9822769165039, 40.76273111352534],
				[-73.98571014404297, 40.748947591479705]
			  ]
		};

		// this.getCurrentLocation()

	}

	async componentDidMount() {
		if(Platform.OS === 'ios'){
			 this.getCurrentLocation();
		   }else{
			 try {
			  const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
				  title: 'Device current location permission',
				  message:
					'Allow app to get your current location',
				  buttonNeutral: 'Ask Me Later',
				  buttonNegative: 'Cancel',
				  buttonPositive: 'OK',
				},
			  );
			  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				this.getCurrentLocation();
			  } else {
				console.log('Location permission denied');
			  }
			} catch (err) {
			  console.warn(err);
			}
		   }
	   }

	getCurrentLocation() {
		Geolocation.getCurrentPosition(
			(position) => {
				const coordinatesdata =  [position.coords.longitude , position.coords.latitude ];
				this.setState({currentCoordinates: coordinatesdata})
			}, (error) => alert(error.message), {
			enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
		});
	}

	renderAnnotations () {
		const items = [];

		for (let i = 0; i < this.state.coordinates.length; i++) {
		  items.push(this.renderAnnotation(i));
		}
	
		return items;
	  }


	  renderAnnotation (counter) {
		const id = `pointAnnotation${counter}`;
		const coordinate = this.state.coordinates[counter]; 
		// this.state.coordinates[counter];
		// const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;
		return (
		  <MapboxGL.PointAnnotation
			key={id}
			id={id}
			title='Test'
			coordinate={coordinate}>
	
			{/* <Image
			source={require('../common/images/marker.png')}
			style={{
			  flex: 1,
			  resizeMode: 'contain',
			  width: 25,
			  height: 25
			  }} */}
			  {/* /> */}
		  </MapboxGL.PointAnnotation>
		);
	  }
	  
	public render() {
		return (
			<View style={styles.container} >

				<View style={styles.container} >

					<MapboxGL.MapView attributionEnabled={true} 
				 ref={map => { this.map = map; }}
					// styleURL="mapbox://styles/hassemmehboob/ckb142mgy1dgp1ilijx09jk9c" 
					style={styles.map} >
						{/* <MapboxGL.UserLocation visible={true} /> */}
						<MapboxGL.Camera centerCoordinate={this.state.currentCoordinates} zoomLevel={1} />
						<MapboxGL.UserLocation animated={true} visible={true}/>
						{this.renderAnnotations()}


						{/* <MapboxGL.CircleLayer circleRadius={10}/> */}

						
						{/* <MapboxGL.PointAnnotation coordinate={this.state.coordinates} /> */}

					</MapboxGL.MapView>
				</View>
				<View style={styles.container} >


					<Text style={styles.container} >hassem</Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		height: 400,

	},
	annotationContainer: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 15
	},
	annotationFill: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'blue',
		transform: [{ scale: 0.6 }]
	}
});





		// async UNSAFE_componentWILLMount(){
		// 	if(IS_ANDROID){
		// 		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		// 		this.setState({
		// 			isAndroidPermissionGranted: isGranted,
		// 			isFetchingAndroidPermissions:false,
		// 		});
		// 	}
		// }
		// isAndroidPermissionGranted:false,
		// 	isFetchingAndroidPermissions:IS_ANDROID,
		// 	coordinates: [[74.329376,31.582045 ]],
		// 	showUserLocation:true,