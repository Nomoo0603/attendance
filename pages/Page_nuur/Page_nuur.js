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
import {image_Rectangle_6_link} from './assets/imageLinks.js'
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_Rectangle_13_link} from './assets/imageLinks.js'
import {image_Rectangle_15_link} from './assets/imageLinks.js'
import {image_Rectangle_23_link} from './assets/imageLinks.js'
import {image_user_3_link} from './assets/imageLinks.js'
import {image_bar_chart___Copy_3_link} from './assets/imageLinks.js'
import {image_calendar___Copy_3_link} from './assets/imageLinks.js'
import {image_home_3_link} from './assets/imageLinks.js'
import {image_camera_3_link} from './assets/imageLinks.js'
import {image_user_4_link} from './assets/imageLinks.js'
import {image_bar_chart___Copy_4_link} from './assets/imageLinks.js'
import {image_calendar___Copy_4_link} from './assets/imageLinks.js'
import {image_home_4_link} from './assets/imageLinks.js'
import {image_camera_4_link} from './assets/imageLinks.js'
const Page_nuur  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Group_20_Copy = () => {
					navigation.navigate("Page_temdegelelud_suragch")
	}
	const onClick_user_4_container = () => {
					navigation.navigate("Page_contact_details")
	}
	const onClick_user_4 = () => {
					navigation.navigate("Page_contact_details")
	}
	const onClick_bar_chart___Copy_4_container = () => {
					navigation.navigate("Page_uuriin_idewhi__1")
	}
	const onClick_bar_chart___Copy_4 = () => {
					navigation.navigate("Page_uuriin_idewhi__1")
	}
	const onClick_calendar___Copy_4_container = () => {
					navigation.navigate("Page_bagshid_ireh_temdegelel")
					navigation.navigate("Page_bagshid_ireh_temdegelel")
					navigation.navigate("Page_bagshid_ireh_temdegelel")
	}
	const onClick_calendar___Copy_4 = () => {
					navigation.navigate("Page_bagshid_ireh_temdegelel")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page9]}    >
			<View style = {noneModeStyles._details_meeting}    >
				<View style = {noneModeStyles._Rectangle}    >
				</View>
				<View style = {noneModeStyles._Interface___Radio_Fill}    >
					<View style = {noneModeStyles._layer_7841b5}    >
						<View style = {noneModeStyles._layer_ab72e9}   >
							<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
								<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_b8f439}    >
						<View style = {noneModeStyles._layer_d0cc91}   >
							<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
								<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_20_Copy}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_20_Copy();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._Rectangle_2}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App}   >
						Математик
					</Text>
					<Text style = {noneModeStyles._Mobile_App_that_the}   >
						Тригонометрийн урвуу функц, тригонометр тэгшитгэлийн шийд 
					</Text>
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<View style = {noneModeStyles._Group_15}    >
						<View style = {noneModeStyles._Rectangle_4}    >
						</View>
						<Text style = {noneModeStyles._10_00}   >
							БҮРТГЭГДСЭН
						</Text>
					</View>
					<View style = {noneModeStyles._Group_18}    >
						<View style = {noneModeStyles._Rectangle_5}    >
							<View style = {noneModeStyles._Mask}    >
							</View>
							<View style = {noneModeStyles._Mask_2}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container}    >
								<View style = {noneModeStyles._Rectangle_6}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_6_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_7}    >
							<View style = {noneModeStyles._Mask_3}    >
							</View>
							<View style = {noneModeStyles._Mask_4}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container_2}    >
								<View style = {noneModeStyles._Rectangle_8}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_9}    >
							<View style = {noneModeStyles._Mask_5}    >
							</View>
							<View style = {noneModeStyles._Mask_6}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container_3}    >
								<View style = {noneModeStyles._Rectangle_10}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_17}    >
							<View style = {noneModeStyles._Rectangle_11}    >
								<View style = {noneModeStyles._Mask_7}    >
									<View style = {noneModeStyles._Mask_8}    >
									</View>
									<View style = {noneModeStyles._Mask_9}    >
									</View>
									<View style = {noneModeStyles._Rectangle_12}    >
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_container_4}    >
									<View style = {noneModeStyles._Rectangle_13}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_13_link}}/>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_16}    >
								<View style = {noneModeStyles._Rectangle_Copy_5}    >
									<View style = {noneModeStyles._Mask_10}    >
										<View style = {noneModeStyles._Mask_11}    >
										</View>
										<View style = {noneModeStyles._Mask_12}    >
										</View>
										<View style = {noneModeStyles._Rectangle_14}    >
										</View>
									</View>
									<View style = {noneModeStyles._Rectangle_container_5}    >
										<View style = {noneModeStyles._Rectangle_15}   >
											<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_15_link}}/>
										</View>
									</View>
								</View>
								<Text style = {noneModeStyles._3_}   >
									3+
								</Text>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_19}    >
						<View style = {noneModeStyles.__}    >
						</View>
						<Text style = {noneModeStyles._Create_by_Maria_Lim}   >
							БАГШ : ОЧИРОО
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_16}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_2}    >
				</View>
				<View style = {noneModeStyles._Group_2}    >
					<View style = {noneModeStyles._Rectangle_17}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App_Copy}   >
						Газар зүй
					</Text>
					<View style = {noneModeStyles._Group_15_Copy}    >
						<View style = {noneModeStyles._Rectangle_18}    >
						</View>
						<Text style = {noneModeStyles._10_00_2}   >
							БҮРТГЭГДЭЭГҮЙ
						</Text>
					</View>
					<Text style = {noneModeStyles._Mobile_App_that_the_Copy}   >
						Газар зүйн мэдээллийн систем ашиглах нь 
					</Text>
					<View style = {noneModeStyles._Group_19_Copy}    >
						<View style = {noneModeStyles.___2}    >
						</View>
						<Text style = {noneModeStyles._Create_by_Maria_Lim_2}   >
							БАГШ : ЗОРИГ
						</Text>
					</View>
					<View style = {noneModeStyles.___3}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_2_Copy}    >
					<View style = {noneModeStyles._Rectangle_19}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App_Copy_2}   >
						Үндэсний бичиг
					</Text>
					<Text style = {noneModeStyles._Mobile_App_that_the_Copy_2}   >
						Идэвхтэй хэрэглээ бүхий үгийн үндэс залгаврыг зөв бичих 
					</Text>
					<View style = {noneModeStyles._Group_19_Copy_2}    >
						<View style = {noneModeStyles.___4}    >
						</View>
						<Text style = {noneModeStyles._Create_by_Maria_Lim_3}   >
							БАГШ : АМАР
						</Text>
					</View>
					<View style = {noneModeStyles.___5}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_2_Copy_2}    >
				<View style = {noneModeStyles._Rectangle_20}    >
				</View>
				<View style = {noneModeStyles._Group_23}    >
					<View style = {noneModeStyles._Rectangle_21}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_1}    >
			</View>
			<View style = {noneModeStyles._greeetings}    >
				<View style = {noneModeStyles._Group}    >
					<Text style = {noneModeStyles._Tavtai_moril}   >
						Тавтай морил
					</Text>
					<Text style = {noneModeStyles._Maria_Tram}   >
						М. Батболд
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_22}    >
					<View style = {noneModeStyles._Mask_13}    >
					</View>
					<View style = {noneModeStyles._Mask_14}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_6}    >
						<View style = {noneModeStyles._Rectangle_23}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_23_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._notification}    >
				<View style = {noneModeStyles.___6}    >
				</View>
				<View style = {noneModeStyles.___7}    >
				</View>
			</View>
			<View style = {noneModeStyles._Date}    >
				<Text style = {noneModeStyles._Today}   >
					ӨНӨӨДӨР
				</Text>
				<View style = {noneModeStyles._Group_2}    >
					<Text style = {noneModeStyles._MON}   >
						ДАВ
					</Text>
					<Text style = {noneModeStyles._06}   >
						06
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_2}    >
					<Text style = {noneModeStyles._TUE}   >
						МЯГ
					</Text>
					<Text style = {noneModeStyles._07}   >
						07
					</Text>
				</View>
				<Text style = {noneModeStyles._WED}   >
					ЛХА
				</Text>
				<Text style = {noneModeStyles._08}   >
					08
				</Text>
				<View style = {noneModeStyles._Group_Copy_4}    >
					<Text style = {noneModeStyles._THU}   >
						ПҮР
					</Text>
					<Text style = {noneModeStyles._09}   >
						09
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_5}    >
					<Text style = {noneModeStyles._FRI}   >
						БА
					</Text>
					<Text style = {noneModeStyles._10}   >
						10
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_6}    >
					<Text style = {noneModeStyles._SAT}   >
						ХАГ
					</Text>
					<Text style = {noneModeStyles._11}   >
						11
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_7}    >
					<Text style = {noneModeStyles._SUN}   >
						БҮТ
					</Text>
					<Text style = {noneModeStyles._12}   >
						12
					</Text>
				</View>
				<View style = {noneModeStyles._Oval}    >
				</View>
			</View>
			<View style = {noneModeStyles._Interface___Radio_Fill_2}    >
				<View style = {noneModeStyles._layer_6d9fdf}    >
					<View style = {noneModeStyles._layer_e329fd}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e567cb}    >
					<View style = {noneModeStyles._layer_2060df}   >
						<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
							<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Interface___Radio_Fill_3}    >
				<View style = {noneModeStyles._layer_f53854}    >
					<View style = {noneModeStyles._layer_9d282c}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_30d898}    >
					<View style = {noneModeStyles._layer_ed386b}   >
						<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
							<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user_3_container}    >
				<View style = {noneModeStyles._user_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_user_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart___Copy_3_container}    >
				<View style = {noneModeStyles._bar_chart___Copy_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_bar_chart___Copy_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._calendar___Copy_3_container}    >
				<View style = {noneModeStyles._calendar___Copy_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_calendar___Copy_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._home_3_container}    >
				<View style = {noneModeStyles._home_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_home_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._camera_3_container}    >
				<View style = {noneModeStyles._camera_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_camera_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Group_2_Copy_3}    >
				<View style = {noneModeStyles._Rectangle_24}    >
				</View>
				<View style = {noneModeStyles._Group_23_2}    >
					<View style = {noneModeStyles._Rectangle_25}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_2}    >
			</View>
			<View style = {noneModeStyles._user_4_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_user_4_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._user_4} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_user_4;}}>
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_user_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart___Copy_4_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_bar_chart___Copy_4_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._bar_chart___Copy_4} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_bar_chart___Copy_4;}}>
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_bar_chart___Copy_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._calendar___Copy_4_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_calendar___Copy_4_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._calendar___Copy_4} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_calendar___Copy_4;}}>
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_calendar___Copy_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._home_4_container}    >
				<View style = {noneModeStyles._home_4}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_home_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._camera_4_container}    >
				<View style = {noneModeStyles._camera_4}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_camera_4_link}}/>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_nuur

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_details_meeting: {
	width: 375,
	height: 468,
	position: "absolute",
	left: -4,
	top: 245,
	},
_Rectangle: {
	width: 375,
	height: 468,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Interface___Radio_Fill: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 15,
	top: 29,
	},
_layer_7841b5: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_ab72e9: {
	},
_layer_b8f439: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_d0cc91: {
	},
_Group_20_Copy: {
	width: 311,
	height: 145,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 16,
	},
_Rectangle_2: {
	width: 311,
	height: 145,
	backgroundColor: "rgb(92, 104, 255)",
	position: "absolute",
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(212.161,210.079,210.079,0.5)",
	shadowRadius: 4,
	},
_Grocery_Mobile_App: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -56.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Mobile_App_that_the: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -23.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Rectangle_3: {
	width: 311,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 87},
	],
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Group_15: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_4: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(12, 249, 107)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00: {
	width: 55,
	height: 10,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Group_18: {
	width: 81.7333,
	height: 30.3333,
	position: "absolute",
	left: 15,
	top: 99.1333,
	},
_Rectangle_5: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0.866667,
	},
_Mask: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_2: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73333},
	],
	},
_Rectangle_6: {
	width: "100%",
	height: "100%",
	},
_Rectangle_7: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 18,
	top: 0.866667,
	},
_Mask_3: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_4: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_2: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866667},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	},
_Rectangle_9: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 36,
	top: 0.866667,
	},
_Mask_5: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_6: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_3: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73333},
	],
	},
_Rectangle_10: {
	width: "100%",
	height: "100%",
	},
_Group_17: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	left: 51.4,
	top: 0,
	},
_Rectangle_11: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_7: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 2.60001,
	top: 0.866667,
	},
_Mask_8: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_9: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_12: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	borderRadius: 25,
	},
_Rectangle_container_4: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	},
_Rectangle_13: {
	width: "100%",
	height: "100%",
	borderRadius: 25,
	},
_Group_16: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 2.60001},
		{translateY: 0.866667},
	],
	borderRadius: 25,
	},
_Rectangle_Copy_5: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	left: -2.60001,
	top: -0.866667,
	},
_Mask_10: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 2.60001,
	top: 0.866667,
	},
_Mask_11: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_12: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_14: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_container_5: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	},
_Rectangle_15: {
	width: "100%",
	height: "100%",
	},
_3_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7},
		{translateY: -5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19: {
	width: 94.676,
	height: 13,
	position: "absolute",
	left: 200.324,
	top: 110,
	},
__: {
	width: 9.35201,
	height: 9.352,
	position: "absolute",
	transform: [
		{translateY: 0.424},
	],
	},
_Create_by_Maria_Lim: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 12.8595},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 9,
	fontWeight: "600",
	lineHeight: 10.5469,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_16: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 58,
	borderRadius: 2.5,
	},
_Rectangle_Copy: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 213,
	borderRadius: 2.5,
	},
_Rectangle_Copy_2: {
	width: 4,
	height: 77,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 368,
	borderRadius: 2.5,
	},
_Group_2: {
	width: 311,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 177,
	},
_Rectangle_17: {
	width: 311,
	height: 126,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 16,
	},
_Grocery_Mobile_App_Copy: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -47},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Group_15_Copy: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_18: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(255, 2, 2)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00_2: {
	width: 65,
	height: 10,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 6},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Mobile_App_that_the_Copy: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_Copy: {
	width: 95.676,
	height: 13,
	position: "absolute",
	left: 17.324,
	top: 94,
	},
___2: {
	width: 9.35199,
	height: 9.35201,
	position: "absolute",
	transform: [
		{translateY: 0.423996},
	],
	},
_Create_by_Maria_Lim_2: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 13.8595},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 10,
	fontWeight: "600",
	lineHeight: 11.7188,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___3: {
	width: 16.032,
	height: 4.032,
	position: "absolute",
	transform: [
		{translateX: 275.984},
		{translateY: 96.584},
	],
	},
_Group_2_Copy: {
	width: 311,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 319,
	},
_Rectangle_19: {
	width: 311,
	height: 126,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 16,
	},
_Grocery_Mobile_App_Copy_2: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -47},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Mobile_App_that_the_Copy_2: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_Copy_2: {
	width: 95.676,
	height: 13,
	position: "absolute",
	left: 17.324,
	top: 94,
	},
___4: {
	width: 9.35199,
	height: 9.35199,
	position: "absolute",
	transform: [
		{translateY: 0.424011},
	],
	},
_Create_by_Maria_Lim_3: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 13.8595},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 10,
	fontWeight: "600",
	lineHeight: 11.7188,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___5: {
	width: 16.032,
	height: 4.03201,
	position: "absolute",
	transform: [
		{translateX: 275.984},
		{translateY: 96.584},
	],
	},
_Group_2_Copy_2: {
	width: 310,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 35,
	top: 733,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_20: {
	width: 310,
	height: 51,
	backgroundColor: "rgb(235, 237, 243)",
	position: "absolute",
	borderRadius: 16,
	},
_Group_23: {
	width: 30,
	height: 2,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 40},
	],
	},
_Rectangle_21: {
	width: 30,
	height: 2,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 3,
	},
_Ellipse_1: {
	width: 57,
	height: 56,
	position: "absolute",
	left: 166,
	top: 710,
	},
_greeetings: {
	width: 179,
	height: 50,
	position: "absolute",
	left: 14,
	top: 98,
	},
_Group: {
	width: 117,
	height: 50,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 62,
	top: 0,
	},
_Tavtai_moril: {
	width: 150,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Maria_Tram: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	color: "rgb(49, 50, 51)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_22: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_13: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_14: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_container_6: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_23: {
	width: "100%",
	height: "100%",
	},
_notification: {
	width: 336.016,
	height: 19.512,
	position: "absolute",
	left: 19,
	top: 66.072,
	},
___6: {
	width: 18,
	height: 12,
	position: "absolute",
	left: 0,
	top: 3.52802,
	},
___7: {
	width: 16.032,
	height: 19.512,
	position: "absolute",
	left: 319.984,
	top: 0,
	},
_Date: {
	width: 340,
	height: 119,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 17,
	top: 133,
	},
_Today: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 1},
		{translateY: -32.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_2: {
	width: 33,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 65},
	],
	},
_MON: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_06: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_2: {
	width: 25,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 58},
		{translateY: 65},
	],
	},
_TUE: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_07: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 4},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_WED: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 109},
		{translateY: 5.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_08: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 115},
		{translateY: 29.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_4: {
	width: 27,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 65},
	],
	},
_THU: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 2},
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_09: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_5: {
	width: 20,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 216},
		{translateY: 65},
	],
	},
_FRI: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 3},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_6: {
	width: 26,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 261},
		{translateY: 65},
	],
	},
_SAT: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_7: {
	width: 28,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 312},
		{translateY: 65},
	],
	},
_SUN: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Oval: {
	width: 6,
	height: 6,
	position: "absolute",
	transform: [
		{translateX: 121},
		{translateY: 113},
	],
	},
_Interface___Radio_Fill_2: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 11,
	top: 429,
	},
_layer_6d9fdf: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_e329fd: {
	},
_layer_e567cb: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_2060df: {
	},
_Interface___Radio_Fill_3: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 11,
	top: 585,
	},
_layer_f53854: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_9d282c: {
	},
_layer_30d898: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_ed386b: {
	},
_user_3_container: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 304,
	top: 742,
	},
_user_3: {
	width: "100%",
	height: "100%",
	},
_bar_chart___Copy_3_container: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 244,
	top: 741,
	},
_bar_chart___Copy_3: {
	width: "100%",
	height: "100%",
	},
_calendar___Copy_3_container: {
	width: 31,
	height: 32,
	position: "absolute",
	left: 109,
	top: 739,
	},
_calendar___Copy_3: {
	width: "100%",
	height: "100%",
	},
_home_3_container: {
	width: 31,
	height: 31,
	position: "absolute",
	left: 45,
	top: 739,
	},
_home_3: {
	width: "100%",
	height: "100%",
	},
_camera_3_container: {
	width: 35,
	height: 34,
	position: "absolute",
	left: 177,
	top: 721,
	},
_camera_3: {
	width: "100%",
	height: "100%",
	},
_Group_2_Copy_3: {
	width: 310,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 35,
	top: 733,
	},
_Rectangle_24: {
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
		{translateX: 11},
		{translateY: 40},
	],
	},
_Rectangle_25: {
	width: 30,
	height: 2,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 3,
	},
_Ellipse_2: {
	width: 57,
	height: 56,
	position: "absolute",
	left: 166,
	top: 710,
	},
_user_4_container: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 304,
	top: 742,
	},
_user_4: {
	width: "100%",
	height: "100%",
	},
_bar_chart___Copy_4_container: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 244,
	top: 741,
	},
_bar_chart___Copy_4: {
	width: "100%",
	height: "100%",
	},
_calendar___Copy_4_container: {
	width: 31,
	height: 32,
	position: "absolute",
	left: 109,
	top: 739,
	},
_calendar___Copy_4: {
	width: "100%",
	height: "100%",
	},
_home_4_container: {
	width: 31,
	height: 31,
	position: "absolute",
	left: 45,
	top: 739,
	},
_home_4: {
	width: "100%",
	height: "100%",
	},
_camera_4_container: {
	width: 35,
	height: 34,
	position: "absolute",
	left: 177,
	top: 721,
	},
_camera_4: {
	width: "100%",
	height: "100%",
	},
})

