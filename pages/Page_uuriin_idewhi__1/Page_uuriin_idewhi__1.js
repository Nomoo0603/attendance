import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Rectangle_link} from './assets/imageLinks.js'
import {image_Rectangle_4_link} from './assets/imageLinks.js'
import {image_Rectangle_6_link} from './assets/imageLinks.js'
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_Rectangle_12_link} from './assets/imageLinks.js'
import {image_user_5_link} from './assets/imageLinks.js'
import {image_bar_chart___Copy_5_link} from './assets/imageLinks.js'
import {image_calendar___Copy_5_link} from './assets/imageLinks.js'
import {image_home_5_link} from './assets/imageLinks.js'
import {image_camera_5_link} from './assets/imageLinks.js'
const Page_uuriin_idewhi__1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Group_23 = () => {
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_Rectangle_Copy_6 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy_2 = () => {
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_Rectangle_Copy_6_2 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy_4 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Rectangle_Copy_6_3 = () => {
					navigation.navigate("Page_temdegelelud_suragch")
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_Group_23_Copy = () => {
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_Rectangle_Copy_6_4 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy_3 = () => {
					navigation.navigate("Page_angiin_medeelel")
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_Group_23_Copy_5 = () => {
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_Rectangle_Copy_6_6 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_user_5_container = () => {
					navigation.navigate("Page_contact_details")
	}
	const onClick_user_5 = () => {
					navigation.navigate("Page_contact_details")
	}
	const onClick_calendar___Copy_5_container = () => {
					navigation.navigate("Page_bagshid_ireh_temdegelel")
	}
	const onClick_home_5_container = () => {
					navigation.navigate("Page_nuur")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page8]}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._folder}    >
					<Text style = {noneModeStyles._Folder}   >
						ИДЭВХИ
					</Text>
					<View style = {noneModeStyles.__}    >
					</View>
				</View>
				<View style = {noneModeStyles._data}    >
					<View style = {noneModeStyles._Group_23}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Rectangle_Copy_6}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Rectangle_Copy_6();}} onStartShouldSetResponderCapture = {() => true}>
						</View>
						<View style = {noneModeStyles._Rectangle_container}    >
							<View style = {noneModeStyles._Rectangle}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Grocery_Mobile_App}   >
							МОНГОЛ ХЭЛ
						</Text>
						<Text style = {noneModeStyles._more_vert___material_copy_2}   >
							
						</Text>
						<View style = {noneModeStyles._Group_22}    >
							<View style = {noneModeStyles._Rectangle_2}    >
							</View>
							<View style = {noneModeStyles._Rectangle_Copy_10}    >
							</View>
						</View>
						<Text style = {noneModeStyles._20_35}   >
							20/35
						</Text>
						<View style = {noneModeStyles._Group_20}    >
							<View style = {noneModeStyles._Rectangle_3}    >
							</View>
						</View>
						<Text style = {noneModeStyles._10_00}   >
							Тэмдэглэлүүд
						</Text>
					</View>
					<View style = {noneModeStyles._Group_23_Copy_2}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_2();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Rectangle_Copy_6_2}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Rectangle_Copy_6_2();}} onStartShouldSetResponderCapture = {() => true}>
						</View>
						<View style = {noneModeStyles._Rectangle_container_2}    >
							<View style = {noneModeStyles._Rectangle_4}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_4_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Responden_data}   >
							ҮНДЭСНИЙ{'\n'}БИЧИГ
						</Text>
						<View style = {noneModeStyles.___2}    >
						</View>
						<View style = {noneModeStyles._Group_22_2}    >
							<View style = {noneModeStyles._Rectangle_5}    >
							</View>
							<View style = {noneModeStyles._Rectangle_Copy_10_2}    >
							</View>
						</View>
						<Text style = {noneModeStyles._20_35_2}   >
							20/35
						</Text>
					</View>
					<View style = {noneModeStyles._Group_23_Copy_4}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_4();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Rectangle_Copy_6_3}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Rectangle_Copy_6_3();}} onStartShouldSetResponderCapture = {() => true}>
						</View>
						<View style = {noneModeStyles._Rectangle_container_3}    >
							<View style = {noneModeStyles._Rectangle_6}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_6_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Grocery_Mobile_App_2}   >
							ГАЗАР ЗҮЙ
						</Text>
						<View style = {noneModeStyles.___3}    >
						</View>
						<View style = {noneModeStyles._Group_22_3}    >
							<View style = {noneModeStyles._Rectangle_7}    >
							</View>
						</View>
						<Text style = {noneModeStyles._40_40}   >
							40/40
						</Text>
					</View>
					<View style = {noneModeStyles._Group_23_Copy}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Rectangle_Copy_6_4}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Rectangle_Copy_6_4();}} onStartShouldSetResponderCapture = {() => true}>
						</View>
						<View style = {noneModeStyles._Rectangle_container_4}    >
							<View style = {noneModeStyles._Rectangle_8}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Landing_page_website}   >
							МАТЕМАТИК
						</Text>
						<View style = {noneModeStyles.___4}    >
						</View>
						<View style = {noneModeStyles._Group_22_4}    >
							<View style = {noneModeStyles._Rectangle_9}    >
							</View>
							<View style = {noneModeStyles._Rectangle_Copy_10_3}    >
							</View>
						</View>
						<Text style = {noneModeStyles._12_20}   >
							12/20
						</Text>
					</View>
					<View style = {noneModeStyles._Group_23_Copy_3}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_3();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Rectangle_Copy_6_5}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_5}    >
							<View style = {noneModeStyles._Rectangle_10}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Grocery_Work_Flow}   >
							УРАН{'\n'}ЗОХИОЛ
						</Text>
						<View style = {noneModeStyles.___5}    >
						</View>
						<View style = {noneModeStyles._Group_22_5}    >
							<View style = {noneModeStyles._Rectangle_11}    >
							</View>
							<View style = {noneModeStyles._Rectangle_Copy_10_4}    >
							</View>
						</View>
						<Text style = {noneModeStyles._18_20}   >
							18/20
						</Text>
					</View>
					<View style = {noneModeStyles._Group_23_Copy_5}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_5();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Rectangle_Copy_6_6}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Rectangle_Copy_6_6();}} onStartShouldSetResponderCapture = {() => true}>
						</View>
						<View style = {noneModeStyles._Rectangle_container_6}    >
							<View style = {noneModeStyles._Rectangle_12}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Landing_page}   >
							ФИЗИК
						</Text>
						<View style = {noneModeStyles.___6}    >
						</View>
						<View style = {noneModeStyles._Group_22_6}    >
							<View style = {noneModeStyles._Rectangle_13}    >
							</View>
						</View>
						<Text style = {noneModeStyles._20_35_3}   >
							0/35
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Group_2_Copy}    >
					<View style = {noneModeStyles._Rectangle_14}    >
					</View>
					<View style = {noneModeStyles._Group_23_2}    >
						<View style = {noneModeStyles._Rectangle_15}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_3}    >
				</View>
				<View style = {noneModeStyles._user_5_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_user_5_container();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._user_5} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_user_5;}}>
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_user_5_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._bar_chart___Copy_5_container}    >
					<View style = {noneModeStyles._bar_chart___Copy_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_bar_chart___Copy_5_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._calendar___Copy_5_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_calendar___Copy_5_container();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._calendar___Copy_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_calendar___Copy_5_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._home_5_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_home_5_container();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._home_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_home_5_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._camera_5_container}    >
					<View style = {noneModeStyles._camera_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_camera_5_link}}/>
					</View>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_uuriin_idewhi__1

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_folder: {
	width: 375,
	height: 87,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 64,
	},
_Folder: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -39.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
__: {
	width: 4.03201,
	height: 15.8498,
	position: "absolute",
	transform: [
		{translateX: 344.984},
		{translateY: 3.54327},
	],
	},
_data: {
	width: 343,
	height: 540,
	position: "absolute",
	left: 16,
	top: 137,
	},
_Group_23: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_Copy_6: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Grocery_Mobile_App: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_more_vert___material_copy_2: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 123},
		{translateY: 16},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "material",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_22: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_2: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10: {
	width: 87,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_20_35: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_20: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 112},
	],
	},
_Rectangle_3: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00: {
	width: 55,
	height: 10,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 23},
		{translateY: 34},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_23_Copy_2: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 188,
	},
_Rectangle_Copy_6_2: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_2: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Responden_data: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___2: {
	width: 4.032,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_2: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_5: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10_2: {
	width: 87,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_20_35_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy_4: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 372,
	},
_Rectangle_Copy_6_3: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_3: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_6: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Grocery_Mobile_App_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___3: {
	width: 4.032,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_3: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_7: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(104, 206, 140)",
	position: "absolute",
	borderRadius: 3,
	},
_40_40: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 180,
	top: 0,
	},
_Rectangle_Copy_6_4: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_4: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Landing_page_website: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___4: {
	width: 4.03201,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_4: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_9: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10_3: {
	width: 87,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_12_20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy_3: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 180,
	top: 188,
	},
_Rectangle_Copy_6_5: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_5: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_10: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Grocery_Work_Flow: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___5: {
	width: 4.03201,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_5: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_11: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10_4: {
	width: 116,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_18_20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy_5: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 180,
	top: 372,
	},
_Rectangle_Copy_6_6: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_6: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Landing_page: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___6: {
	width: 4.03201,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_6: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_13: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(255, 63, 78)",
	position: "absolute",
	borderRadius: 3,
	},
_20_35_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgba(49, 50, 51, 0.698)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_2_Copy: {
	width: 310,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 35,
	top: 733,
	},
_Rectangle_14: {
	width: 310,
	height: 51,
	backgroundColor: "rgb(235, 237, 243)",
	position: "absolute",
	borderRadius: 16,
	},
_Group_23_2: {
	width: 30,
	height: 2,
	position: "absolute",
	transform: [
		{translateX: 213},
		{translateY: 38},
	],
	},
_Rectangle_15: {
	width: 30,
	height: 2,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 3,
	},
_Ellipse_3: {
	width: 57,
	height: 56,
	position: "absolute",
	left: 170,
	top: 707,
	},
_user_5_container: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 308,
	top: 739,
	},
_user_5: {
	width: "100%",
	height: "100%",
	},
_bar_chart___Copy_5_container: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 248,
	top: 738,
	},
_bar_chart___Copy_5: {
	width: "100%",
	height: "100%",
	},
_calendar___Copy_5_container: {
	width: 31,
	height: 32,
	position: "absolute",
	left: 113,
	top: 736,
	},
_calendar___Copy_5: {
	width: "100%",
	height: "100%",
	},
_home_5_container: {
	width: 31,
	height: 31,
	position: "absolute",
	left: 45,
	top: 739,
	},
_home_5: {
	width: "100%",
	height: "100%",
	},
_camera_5_container: {
	width: 35,
	height: 34,
	position: "absolute",
	left: 181,
	top: 718,
	},
_camera_5: {
	width: "100%",
	height: "100%",
	},
})

