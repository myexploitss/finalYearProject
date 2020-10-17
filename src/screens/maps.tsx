import * as React from 'react';
import { View, StyleSheet, Text, Platform, Permission, PermissionsAndroid, Alert, Linking } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken("pk.eyJ1IjoiaGFzc2VtbWVoYm9vYiIsImEiOiJja2IxM3JmbXAwOTE5MnRtaXE3ZnZyN2hpIn0.fcjB-cjoHzaiDJThwZDJHQ");
import Geolocation from '@react-native-community/geolocation';
import Dialog from "react-native-dialog";

const IS_ANDROID = Platform.OS === "android";
export interface mapsProps {
}

export interface mapsState {
}

export default class mapsComponent extends React.Component<mapsProps, any> {

	map: any;

	constructor(props: mapsProps) {
		super(props);
		// this.getCurrentLocation();
		this.state = {
			initialCoords: undefined,
			currentCoordinates: [31.634664128, 74.351998592],
			coordinates: [],
			showDialog: false,
			selectedShop: {},
			dataShop: ''
		};
		// this.fetchAllShops();
	}

	getShopsDetails() {

		return fetch('https://2b1115a1f1af.ngrok.io/shop')
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				this.setState({
					coordinates: json
				})
				console.log(this.state.coordinates)
			})
			.catch((error) => {
				console.error('error in blooddetailss');
			});

	}


	// fetchAllShops() {


	// 	// return fetch('https://reactnative.dev/movies.json')
	// 	// 	.then((response) => response.json())
	// 	// 	.then((json) => {
	// 			//   return json.movies;
	// 			this.setState({
	// 				coordinates: [
	// 					{
	// 						phone: '+9203054747099',
	// 						shopName: "this is my shop name",
	// 						shopDescription: "This is my descriptin sldf jsdl jjsdfl ljklk sdfjlsdfsldjf lsj lsdkfj lj lksdj flksdjf lsdfjsldkfj  lksjdfl ksdjflksd jflksdjf lksdjflskd fjlks fjlkdsfj ldksfj dslfk",
	// 						coordinates: [-73.98330688476561, 40.76975180901395]
	// 					},

	// 				]
	// 			});

	// // })
	// // .catch((error) => {
	// // 	console.error(error);
	// });



	async requestlocationPermission() {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {

				this.getCurrentLocation()

			} else {
				alert("Camera permission denied")
			}
		} catch (err) {
			console.warn(err)
		}
	}


	componentDidMount() {
		this.getShopsDetails();
		this.requestlocationPermission();
		// console.log("called")

	}


	getCurrentLocation() {
		Geolocation.getCurrentPosition((position) => {
			const coordinatesdata = [position.coords.longitude, position.coords.latitude];
			setTimeout(() => {
				this.setState({ currentCoordinates: coordinatesdata })
			}, 100);
		}, (error) => alert(error.message), {
			enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
		});
	}

	renderAnnotations() {
		const items = [];
		for (let i = 0; i < this.state.coordinates.length; i++) {
			items.push(this.renderAnnotation(i));
		}
		return items;
	}


	renderAnnotation(counter) {
		const id = `pointAnnotation${counter}`;
		const shopData = this.state.coordinates[counter];
		return (
			<MapboxGL.PointAnnotation
				key={id}
				id={id}
				title='Shop Name'
				coordinate={[shopData.longitude, shopData.latitude]}
				onSelected={(marker) => {
					this.setState({
						selectedShop: shopData
					})
					this.setState({ showDialog: true })
				}}>

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

	handleCancel = () => {
		this.setState({ showDialog: false });
	};

	handelContactUs = () => {
		this.setState({ showDialog: false });
		Linking.openURL('whatsapp://send?text=hello sir&phone=' + this.state.selectedShop.phone)
	};

	public render() {
		return (

			<View style={styles.container}
			>

				<View style={styles.container} >
					<Text>{this.state.dataShop.longitude}</Text>
					<MapboxGL.MapView attributionEnabled={true}
						styleURL="mapbox://styles/hassemmehboob/ckb142mgy1dgp1ilijx09jk9c"
						ref={map => { this.map = map; }}
						style={styles.map} >
						<MapboxGL.Camera centerCoordinate={this.state.currentCoordinates} zoomLevel={15} />
						<MapboxGL.UserLocation animated={true} visible={true} />
						{this.renderAnnotations()}
					</MapboxGL.MapView>
					{
						this.state.showDialog ?
							<View>
								{/* <Dialog.Container visible={true}>
									<Dialog.Title>{this.state.selectedShop.shopName}</Dialog.Title>
									<Dialog.Description>
										{this.state.selectedShop.shopDescription}
									</Dialog.Description>
									<Dialog.Button label="Contact US" onPress={this.handelContactUs} />
									<Dialog.Button label="Cancel" onPress={this.handleCancel} />
								</Dialog.Container> */}
							</View>
							: null
					}
				</View>
				{/* <View style={styles.container} >
					<Text style={styles.container} >hassem</Text>
				</View> */}

			</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		flex: 1
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
