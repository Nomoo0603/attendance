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
const Page_irts  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Header = () => {
					navigation.navigate("Page_nuur")
	}
	const onClick_Icon = () => {
					navigation.navigate("Page_nuur")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page1]}    >
			<View style = {noneModeStyles._Header}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Header();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Icon}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Icon();}} onStartShouldSetResponderCapture = {() => true}>
				</View>
				<Text style = {noneModeStyles._Position}   >
					11Б АНГИЙН ИРЦ
				</Text>
				<View style = {noneModeStyles._Icon_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Section}    >
				<Text style = {noneModeStyles._Available_Players}   >
					сурагчид
				</Text>
				<View style = {noneModeStyles._Card}    >
					<View style = {noneModeStyles._Rectangle}    >
					</View>
					<View style = {noneModeStyles._Image}    >
						<View style = {noneModeStyles._Mask}    >
						</View>
						<View style = {noneModeStyles._Mask_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text}    >
						<View style = {noneModeStyles._Text_2}    >
							<View style = {noneModeStyles._Rectangle_2}    >
							</View>
							<Text style = {noneModeStyles._14_6M}   >
								14.6M
							</Text>
						</View>
						<View style = {noneModeStyles._Text_3}    >
							<Text style = {noneModeStyles._Nathaneal_Down}   >
								Nathaneal Down
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<View style = {noneModeStyles._Card_2}    >
						<View style = {noneModeStyles._Rectangle_4}    >
						</View>
						<View style = {noneModeStyles._Text_4}    >
							<View style = {noneModeStyles._Text_5}    >
								<View style = {noneModeStyles._Rectangle_5}    >
								</View>
								<Text style = {noneModeStyles._14_6M_2}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_6}    >
								<Text style = {noneModeStyles._Nathaneal_Down_2}   >
									Амарбаясгалан Бүрэн
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_3}    >
					<View style = {noneModeStyles._Rectangle_6}    >
					</View>
					<View style = {noneModeStyles._Image_2}    >
						<View style = {noneModeStyles._Mask_3}    >
						</View>
						<View style = {noneModeStyles._Mask_4}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_7}    >
						<View style = {noneModeStyles._Text_8}    >
							<View style = {noneModeStyles._Rectangle_7}    >
							</View>
							<Text style = {noneModeStyles._14_6M_3}   >
								14.6M
							</Text>
						</View>
						<View style = {noneModeStyles._Text_9}    >
							<Text style = {noneModeStyles._Nathaneal_Down_3}   >
								Nathaneal Down
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_8}    >
					</View>
					<View style = {noneModeStyles._Card_4}    >
						<View style = {noneModeStyles._Rectangle_9}    >
						</View>
						<View style = {noneModeStyles._Text_10}    >
							<View style = {noneModeStyles._Text_11}    >
								<View style = {noneModeStyles._Rectangle_10}    >
								</View>
								<Text style = {noneModeStyles._14_6M_4}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_12}    >
								<Text style = {noneModeStyles._Nathaneal_Down_4}   >
									Номон-Эрдэнэ Цэнгүүн
								</Text>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Card_5}    >
						<View style = {noneModeStyles._Rectangle_11}    >
						</View>
						<View style = {noneModeStyles._Text_13}    >
							<View style = {noneModeStyles._Text_14}    >
								<View style = {noneModeStyles._Rectangle_12}    >
								</View>
								<Text style = {noneModeStyles._14_6M_5}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_15}    >
								<Text style = {noneModeStyles._Nathaneal_Down_5}   >
									Бүрэнжаргал Энхмөнх
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_6}    >
					<View style = {noneModeStyles._Rectangle_13}    >
					</View>
					<View style = {noneModeStyles._Text_16}    >
						<View style = {noneModeStyles._Text_17}    >
							<View style = {noneModeStyles._Rectangle_14}    >
							</View>
							<Text style = {noneModeStyles._14_6M_6}   >
								ИРСЭН
							</Text>
						</View>
						<View style = {noneModeStyles._Text_18}    >
							<Text style = {noneModeStyles._Nathaneal_Down_6}   >
								Өнөржаргал Баатархүү
							</Text>
						</View>
					</View>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_irts

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_Header: {
	width: 369,
	height: 21,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 15,
	top: 48,
	},
_Icon: {
	width: 34.2031,
	height: 26.4297,
	backgroundColor: "rgb(249, 249, 249)",
	position: "absolute",
	transform: [
		{translateY: 2.73914},
	],
	},
_Position: {
	width: 122.363,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 123.319},
		{translateY: -11.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Icon_2: {
	width: 3.82874,
	height: 16.4348,
	position: "absolute",
	transform: [
		{translateX: 342.539},
		{translateY: 2.73914},
	],
	},
_Section: {
	width: 369,
	height: 455,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 7,
	top: 78,
	},
_Available_Players: {
	width: 112.852,
	height: "auto",
	position: "absolute",
	top: 0,
	bottom: 431.125,
	transform: [
		{translateX: 8},
	],
	color: "rgba(51, 58, 51, 0.79)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 146.804,
	},
_Rectangle: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_2: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9482,
	top: 30.0902,
	},
_Text_2: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_2: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M: {
	width: 36.3264,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.0752},
		{translateY: -8.41283},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_3: {
	width: 126.187,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73547},
	],
	},
_Nathaneal_Down: {
	width: 125.231,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_3: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Card_2: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_4: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_4: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9481,
	top: 30.0902,
	},
_Text_5: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_5: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_2: {
	width: 60.024,
	height: 16.4128,
	position: "absolute",
	transform: [
		{translateX: 8.18811},
		{translateY: 8.2064},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_6: {
	width: 182.588,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73547},
	],
	},
_Nathaneal_Down_2: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_3: {
	width: 369.956,
	height: 202.425,
	position: "absolute",
	left: 0,
	top: 252.575,
	},
_Rectangle_6: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_2: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask_3: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_4: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text_7: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9482,
	top: 30.0902,
	},
_Text_8: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_7: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_3: {
	width: 36.3264,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.0752},
		{translateY: -8.41283},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_9: {
	width: 126.187,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73544},
	],
	},
_Nathaneal_Down_3: {
	width: 125.231,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_8: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Card_4: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_9: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_10: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9481,
	top: 30.0902,
	},
_Text_11: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_10: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_4: {
	width: 60.024,
	height: 16.4128,
	position: "absolute",
	transform: [
		{translateX: 8.18811},
		{translateY: 8.20641},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_12: {
	width: 182.588,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73544},
	],
	},
_Nathaneal_Down_4: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_5: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0.955933,
	top: 109.419,
	},
_Rectangle_11: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_13: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 86.9922,
	top: 29.1784,
	},
_Text_14: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_12: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_5: {
	width: 60.0239,
	height: 16.4128,
	position: "absolute",
	transform: [
		{translateX: 8.18811},
		{translateY: 8.2064},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_15: {
	width: 182.588,
	height: 37.3847,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73544},
	],
	},
_Nathaneal_Down_5: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_6: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 41.0321,
	},
_Rectangle_13: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_16: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9481,
	top: 30.0902,
	},
_Text_17: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_14: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_6: {
	width: 60.024,
	height: 18,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 6.22009},
		{translateY: -8.41282},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_18: {
	width: 182.588,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73546},
	],
	},
_Nathaneal_Down_6: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "left",
	},
})

