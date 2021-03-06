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
const Page_form_owchtei  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_9a766f = () => {
					navigation.navigate("Page_contact_details")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page3]}    >
			<View style = {noneModeStyles._Form}    >
				<View style = {noneModeStyles._Rectangle}    >
				</View>
				<View style = {noneModeStyles._Group_25}    >
					<View style = {noneModeStyles._Interface___Radio_Fill}    >
						<View style = {noneModeStyles._layer_bdbbf2}    >
							<View style = {noneModeStyles._layer_32d0be}   >
								<Svg style={{height: 22, width: 23}} viewBox = "0 0 23 22">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 11C1 16.5228 5.62639 21 11.3333 21C17.0403 21 21.6667 16.5228 21.6667 11C21.6667 5.47715 17.0403 1 11.3333 1C5.62639 1 1 5.47715 1 11Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_a37830}    >
							<View style = {noneModeStyles._layer_f73d4c}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1.02564 4.87179C1.02564 6.99597 2.80502 8.71795 5 8.71795C7.19498 8.71795 8.97436 6.99597 8.97436 4.87179C8.97436 2.74762 7.19498 1.02564 5 1.02564C2.80502 1.02564 1.02564 2.74762 1.02564 4.87179Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._SHaltgaanaa_oruulna_uu}   >
						???????????????????? ?????????????? ????
					</Text>
					<View style = {noneModeStyles._Text_fill}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_26}    >
					<View style = {noneModeStyles._Interface___Radio_Fill_2}    >
						<View style = {noneModeStyles._layer_a7c07a}    >
							<View style = {noneModeStyles._layer_0c55e6}   >
								<Svg style={{height: 22, width: 23}} viewBox = "0 0 23 22">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 11C1 16.5228 5.62639 21 11.3333 21C17.0403 21 21.6667 16.5228 21.6667 11C21.6667 5.47715 17.0403 1 11.3333 1C5.62639 1 1 5.47715 1 11Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_70eb71}    >
							<View style = {noneModeStyles._layer_ccf934}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1.02564 4.87179C1.02564 6.99597 2.80502 8.71795 5 8.71795C7.19498 8.71795 8.97436 6.99597 8.97436 4.87179C8.97436 2.74762 7.19498 1.02564 5 1.02564C2.80502 1.02564 1.02564 2.74762 1.02564 4.87179Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._H_chintei_hugatsaa}   >
						???????????????? ??????????????
					</Text>
					<View style = {noneModeStyles._Text_fill_2}    >
					</View>
					<Text style = {noneModeStyles._mm_dd_yyyy}   >
						mm/dd/yyyy
					</Text>
				</View>
				<View style = {noneModeStyles._Group_25_2}    >
					<View style = {noneModeStyles._Interface___Radio_Fill_3}    >
						<View style = {noneModeStyles._layer_fd6dcb}    >
							<View style = {noneModeStyles._layer_87d05a}   >
								<Svg style={{height: 22, width: 23}} viewBox = "0 0 23 22">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 11C1 16.5228 5.62639 21 11.3333 21C17.0403 21 21.6667 16.5228 21.6667 11C21.6667 5.47715 17.0403 1 11.3333 1C5.62639 1 1 5.47715 1 11Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_e86969}    >
							<View style = {noneModeStyles._layer_1dfdab}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1.02564 4.87179C1.02564 6.99597 2.80502 8.71795 5 8.71795C7.19498 8.71795 8.97436 6.99597 8.97436 4.87179C8.97436 2.74762 7.19498 1.02564 5 1.02564C2.80502 1.02564 1.02564 2.74762 1.02564 4.87179Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Delgereng_i}   >
						??????????????????????
					</Text>
					<View style = {noneModeStyles._Text_fill_3}    >
					</View>
				</View>
				<View style = {noneModeStyles._bg}    >
				</View>
				<View style = {noneModeStyles._Toggle}    >
					<View style = {noneModeStyles._Button___Secondary}    >
					</View>
				</View>
				<View style = {noneModeStyles._Drag_Area}    >
					<View style = {noneModeStyles._Wrap}    >
						<Text style = {noneModeStyles._Ilgeeh_fail_songoh}   >
							???????????? ???????? ????????????
						</Text>
					</View>
				</View>
				<Text style = {noneModeStyles._Tekst}   >
					??????????
				</Text>
				<Text style = {noneModeStyles._Tekst_2}   >
					??????????
				</Text>
				<Text style = {noneModeStyles._Ilgeeh}   >
					????????????
				</Text>
			</View>
			<View style = {noneModeStyles._grocery_mpbile_}    >
				<View style = {noneModeStyles._layer_9a766f}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_9a766f();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._layer_ea48a7}   >
						<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
							<Path fill = {"#313233"}     d = "M8.49999 17L10.0015 15.4985L4.07185 9.54341H17V7.45658H4.07185L10.0015 1.5015L8.49999 0L0 8.49999L8.49999 17Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.__}    >
				</View>
				<Text style = {noneModeStyles._Grocery_Mobile_App}   >
					?????????? ???????? ????????????
				</Text>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_form_owchtei

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_Form: {
	width: 310,
	height: 677,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 30,
	top: 114,
	},
_Rectangle: {
	width: 310,
	height: 677,
	backgroundColor: "rgb(235, 237, 243)",
	position: "absolute",
	borderRadius: 16,
	},
_Group_25: {
	width: 303,
	height: 68,
	position: "absolute",
	left: 0,
	top: 5,
	},
_Interface___Radio_Fill: {
	width: 31,
	height: 30,
	overflow: "hidden",
	position: "absolute",
	},
_layer_bdbbf2: {
	position: "absolute",
	transform: [
		{translateX: 5.16675},
		{translateY: 5},
	],
	},
_layer_32d0be: {
	},
_layer_a37830: {
	position: "absolute",
	transform: [
		{translateX: 11.625},
		{translateY: 11.25},
	],
	},
_layer_f73d4c: {
	},
_SHaltgaanaa_oruulna_uu: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 37},
		{translateY: 7},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Text_fill: {
	width: 298,
	height: 30,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 38},
	],
	borderRadius: 16,
	},
_Group_26: {
	width: 166,
	height: 68,
	position: "absolute",
	left: 0,
	top: 91,
	},
_Interface___Radio_Fill_2: {
	width: 31,
	height: 30,
	overflow: "hidden",
	position: "absolute",
	},
_layer_a7c07a: {
	position: "absolute",
	transform: [
		{translateX: 5.16675},
		{translateY: 5},
	],
	},
_layer_0c55e6: {
	},
_layer_70eb71: {
	position: "absolute",
	transform: [
		{translateX: 11.625},
		{translateY: 11.25},
	],
	},
_layer_ccf934: {
	},
_H_chintei_hugatsaa: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 37},
		{translateY: 5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Text_fill_2: {
	width: 126,
	height: 29,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 38},
		{translateY: 39},
	],
	borderRadius: 16,
	},
_mm_dd_yyyy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 60,
	top: 45,
	color: "rgba(0, 0, 0, 0.5)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Group_25_2: {
	width: 303,
	height: 208,
	position: "absolute",
	left: 0,
	top: 177,
	},
_Interface___Radio_Fill_3: {
	width: 31,
	height: 30,
	overflow: "hidden",
	position: "absolute",
	},
_layer_fd6dcb: {
	position: "absolute",
	transform: [
		{translateX: 5.16675},
		{translateY: 5},
	],
	},
_layer_87d05a: {
	},
_layer_e86969: {
	position: "absolute",
	transform: [
		{translateX: 11.625},
		{translateY: 11.25},
	],
	},
_layer_1dfdab: {
	},
_Delgereng_i: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 42},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Text_fill_3: {
	width: 298,
	height: 170,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 38},
	],
	borderRadius: 16,
	},
_bg: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 4,
	top: 403,
	bottom: 19,
	right: 4,
	borderRadius: 24,
	},
_Toggle: {
	width: "auto",
	height: 37,
	backgroundColor: "rgb(247, 249, 251)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 81,
	top: 425,
	right: 136,
	transform: [
		{translateX: 17.7},
		{translateY: -7.5},
	],
	paddingTop: 4,
	paddingRight: 5,
	paddingBottom: 4,
	paddingLeft: 5,
	borderRadius: 40,
	},
_Button___Secondary: {
	width: "auto",
	height: 28,
	backgroundColor: "rgb(0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	paddingTop: 7,
	paddingRight: 20,
	paddingBottom: 7,
	paddingLeft: 20,
	borderRadius: 40,
	},
_Drag_Area: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(247, 249, 251)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 4,
	top: 472,
	bottom: 19,
	right: 4,
	paddingTop: 32,
	paddingRight: 32,
	paddingBottom: 32,
	paddingLeft: 32,
	},
_Wrap: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(226, 230, 234)",
	borderRadius: 24,
	},
_Ilgeeh_fail_songoh: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.3)",
	fontSize: 11,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Tekst: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 226,
	color: "rgba(0, 0, 0, 0.3)",
	fontSize: 11,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Tekst_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 52,
	color: "rgba(0, 0, 0, 0.3)",
	fontSize: 11,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Ilgeeh: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 131,
	top: 436,
	transform: [
		{translateX: 17.7},
		{translateY: -0.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_grocery_mpbile_: {
	width: 339.016,
	height: 25,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 18,
	top: 65,
	},
_layer_9a766f: {
	position: "absolute",
	transform: [
		{translateY: 3.58401},
	],
	},
_layer_ea48a7: {
	},
__: {
	width: 4.03198,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 325},
		{translateY: 3.58401},
	],
	},
_Grocery_Mobile_App: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 88.0161},
		{translateY: -10.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
})

