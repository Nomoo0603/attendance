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
import {image_Rectangle_3_link} from './assets/imageLinks.js'
import {image_Rectangle_5_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_2_link} from './assets/imageLinks.js'
import {image_Rectangle_6_link} from './assets/imageLinks.js'
import {image_Rectangle_7_link} from './assets/imageLinks.js'
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_9_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_user_6_link} from './assets/imageLinks.js'
import {image_bar_chart___Copy_6_link} from './assets/imageLinks.js'
import {image_calendar___Copy_6_link} from './assets/imageLinks.js'
import {image_home_6_link} from './assets/imageLinks.js'
const Page_bagshid_ireh_temdegelel  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_user_6_container = () => {
					navigation.navigate("Page_contact_details")
	}
	const onClick_bar_chart___Copy_6_container = () => {
					navigation.navigate("Page_uuriin_idewhi__1")
	}
	const onClick_bar_chart___Copy_6 = () => {
					navigation.navigate("Page_uuriin_idewhi__1")
	}
	const onClick_home_6_container = () => {
					navigation.navigate("Page_nuur")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page5]}    >
			<View style = {noneModeStyles._activity}    >
				<Text style = {noneModeStyles._Activity}   >
					Сурагчдын тэмдэглэл
				</Text>
				<View style = {noneModeStyles.__}    >
				</View>
			</View>
			<View style = {noneModeStyles._activity_2}    >
				<View style = {noneModeStyles._Group_2}    >
					<View style = {noneModeStyles._Group}    >
						<Text style = {noneModeStyles._Amarachi_Nkechi}   >
							А. Энхжин
						</Text>
						<Text style = {noneModeStyles._Updated_screen_on_Gr}   >
							Оруулсан хичээл : Байхгүй байна!
						</Text>
					</View>
					<Text style = {noneModeStyles._Just_now}   >
						Яг одоо
					</Text>
					<View style = {noneModeStyles._Group_17_Copy}    >
						<View style = {noneModeStyles._Rectangle}    >
							<View style = {noneModeStyles._Mask}    >
								<View style = {noneModeStyles._Mask_2}    >
								</View>
								<View style = {noneModeStyles._Mask_3}    >
								</View>
								<View style = {noneModeStyles._Rectangle_2}    >
								</View>
							</View>
							<View style = {noneModeStyles._Rectangle_container}    >
								<View style = {noneModeStyles._Rectangle_3}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_3_link}}/>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_2}    >
					<Text style = {noneModeStyles._Amarachi_Nkechi_2}   >
						Н. Намуун
					</Text>
					<Text style = {noneModeStyles._Updated_file_on_Resp}   >
						Оруулсан хичээл : Responden data
					</Text>
				</View>
				<Text style = {noneModeStyles._Sun__16_July_2021}   >
					2 сарын 8 , 2022
				</Text>
				<Text style = {noneModeStyles._Sun__16_July_2021_Copy_2}   >
					2 сарын 8 , 2022
				</Text>
				<View style = {noneModeStyles._Group_3}    >
					<Text style = {noneModeStyles._Amar_Nkechi}   >
						Б.Билгүдэй
					</Text>
					<Text style = {noneModeStyles._Add_photo_on_Grocery}   >
						Оруулсан хичээл :  Grocery Work Flow
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_2}    >
					<Text style = {noneModeStyles._Mario_Niketh}   >
						Э. Энхжин
					</Text>
					<Text style = {noneModeStyles._Attachment_Landing_p}   >
						Оруулсын хичээл  : 
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy}    >
					<Text style = {noneModeStyles._Attachment_Grocery_W}   >
						Оруулсан хичээл : Grocery Work Flow
					</Text>
				</View>
				<Text style = {noneModeStyles._Shawni_Pelikan}   >
					Б. Болдбаяр
				</Text>
				<Text style = {noneModeStyles._Attachment_Grocery_W_2}   >
					Оруулсан хичээл : 
				</Text>
				<Text style = {noneModeStyles._13_05}   >
					13:05
				</Text>
				<Text style = {noneModeStyles._Sun__16_July_2021_2}   >
					2 сарын 7 , 2022
				</Text>
				<Text style = {noneModeStyles._Sun__16_July_2021_Copy}   >
					2 сарын 9 , 2022
				</Text>
				<View style = {noneModeStyles._Rectangle_4}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_5}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_9}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_4}    >
				</View>
				<View style = {noneModeStyles._Rectangle_container_2}    >
					<View style = {noneModeStyles._Rectangle_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_5_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_container}    >
					<View style = {noneModeStyles._Rectangle_Copy}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_2_container}    >
					<View style = {noneModeStyles._Rectangle_Copy_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_10}    >
					<View style = {noneModeStyles._Mask_4}    >
					</View>
					<View style = {noneModeStyles._Mask_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_3}    >
						<View style = {noneModeStyles._Rectangle_6}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_6_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_11}    >
					<View style = {noneModeStyles._Mask_6}    >
					</View>
					<View style = {noneModeStyles._Mask_7}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_4}    >
						<View style = {noneModeStyles._Rectangle_7}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_7_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_10_2}    >
					<View style = {noneModeStyles._Mask_8}    >
					</View>
					<View style = {noneModeStyles._Mask_9}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_5}    >
						<View style = {noneModeStyles._Rectangle_8}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_12}    >
					<View style = {noneModeStyles._Mask_10}    >
					</View>
					<View style = {noneModeStyles._Mask_11}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_6}    >
						<View style = {noneModeStyles._Rectangle_9}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_9_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_9}    >
					<View style = {noneModeStyles._vscode_icons_file_type_pdf}    >
						<View style = {noneModeStyles._ViewBox}    >
						</View>
						<View style = {noneModeStyles._layer_3807d3}    >
							<View style = {noneModeStyles._layer_63f154}   >
								<Svg style={{height: 32, width: 24}} viewBox = "0 0 24 32">
									<Path fill = {"url(#paint0_linear_0_602)"}     d = "M0 0H14.5576C18.2198 2.59374 21.413 5.79288 24 9.45993V31.851H0V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_de61b9}    >
							<View style = {noneModeStyles._layer_6cdf25}   >
								<Svg style={{height: 33, width: 25}} viewBox = "0 0 25 33">
									<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C8C8C8"} strokeWidth = {0.5} d = "M0.256012 0.256012H15.1047C18.8402 2.90162 22.0973 6.16474 24.7359 9.90512V32.744H0.256012V0.256012Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_f3401e}    >
							<View style = {noneModeStyles._layer_57f8aa}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"url(#paint0_linear_0_604)"}     d = "M0 0C3.86649 2.74841 7.24183 6.12914 9.98408 10C8.13861 8.10335 5.55015 7.11787 2.91059 7.30698C3.28883 4.52945 2.18439 1.75676 0 0L0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_d18e5d}    >
							<View style = {noneModeStyles._layer_aa71cd}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C8C8C8"} strokeWidth = {0.5} d = "M0.23217 0.20708C3.93462 2.83889 7.16677 6.07619 9.79267 9.78282C8.0255 7.96664 5.54685 7.02297 3.01927 7.20406C3.38147 4.54436 2.32388 1.88931 0.23217 0.20708L0.23217 0.20708Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_58aa0d}    >
							<View style = {noneModeStyles._layer_72b2c9}   >
								<Svg style={{height: 8, width: 22}} viewBox = "0 0 22 8">
									<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C8C8C8"} strokeWidth = {4} d = "M2.03468 2.03468H19.9653V5.46821H2.03468V2.03468Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape}    >
						</View>
						<View style = {noneModeStyles._layer_3d10b8}    >
							<View style = {noneModeStyles._layer_650ced}   >
								<Svg style={{height: 8, width: 22}} viewBox = "0 0 22 8">
									<Path fill = {"url(#paint0_linear_0_610)"}     d = "M0 0H22V7.39492H0V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape_2}    >
						</View>
						<View style = {noneModeStyles._Shape_3}    >
						</View>
					</View>
					<View style = {noneModeStyles._Group_3}    >
						<Text style = {noneModeStyles._Presentation_pdf}   >
							Персентаци.pdf
						</Text>
						<Text style = {noneModeStyles._5_MB}   >
							5 MB
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_10_3}    >
					<View style = {noneModeStyles._Mask_12}    >
					</View>
					<View style = {noneModeStyles._Mask_13}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_7}    >
						<View style = {noneModeStyles._Rectangle_10}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_11}    >
					<View style = {noneModeStyles._vscode_icons_file_type_photoshop2}    >
						<View style = {noneModeStyles._ViewBox_2}    >
						</View>
						<View style = {noneModeStyles._layer_55b0f0}    >
							<View style = {noneModeStyles._layer_eed19b}   >
								<Svg style={{height: 35, width: 27}} viewBox = "0 0 27 35">
									<Path fill = {"#070444"}     d = "M19.0775 0H0V35H26.1375V7.36L19.1637 0.09L19.0775 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_f2b2e2}    >
							<View style = {noneModeStyles._layer_53834e}   >
								<Svg style={{height: 10, width: 26}} viewBox = "0 0 26 10">
									<Path fill = {"#5BC3F6"}     d = "M0 0H25.8886V9.99999H0V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_0bff2e}    >
							<View style = {noneModeStyles._layer_5f75e8}   >
								<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
									<Path fill = {"#5BC3F6"}     d = "M0 0V8H7.67391L0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape_4}    >
						</View>
						<View style = {noneModeStyles._layer_05287c}    >
							<View style = {noneModeStyles._layer_b17509}   >
								<Svg style={{height: 7, width: 4}} viewBox = "0 0 4 7">
									<Path fill = {"#070444"}     d = "M0.245736 5.07882C0.638332 5.34157 1.09723 5.48795 1.56945 5.50105C2.03785 5.50105 2.26593 5.28926 2.26593 4.94848C2.26593 4.60771 2.03377 4.42986 1.46356 4.15833C0.605402 3.84869 0.0335894 3.03414 0.0339415 2.12184C-0.00806621 1.56235 0.18999 1.01141 0.578611 0.606728C0.967232 0.202044 1.5097 -0.0181521 2.07043 0.00117304C2.55574 -0.0125163 3.03526 0.109245 3.45524 0.352807L3.17421 1.80143C2.84017 1.59405 2.45545 1.48272 2.06228 1.47966C1.64684 1.47966 1.41875 1.6806 1.41875 1.982C1.41875 2.32413 1.69029 2.46397 2.33382 2.78573C3.16693 3.11071 3.7019 3.9287 3.66568 4.82222C3.70914 5.41059 3.49428 5.98873 3.0771 6.4059C2.65993 6.82307 2.08179 7.03794 1.49343 6.99448C0.966317 6.99334 0.449673 6.84727 0 6.57224L0.245736 5.07882Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape_5}    >
						</View>
						<View style = {noneModeStyles._Shape_6}    >
						</View>
						<View style = {noneModeStyles._layer_d49948}    >
							<View style = {noneModeStyles._layer_88e8e8}   >
								<Svg style={{height: 10, width: 7}} viewBox = "0 0 7 10">
									<Path fill = {"#5BC3F6"}     d = "M3.24443 0.0208801C2.429 -0.0780854 1.61033 0.177805 0.996407 0.723537C0.382489 1.26927 0.0324195 2.05231 0.0351407 2.87372C0.0351407 4.30962 0.667139 5.07687 2.47213 5.90731C3.73612 6.47738 4.05086 6.77315 4.05086 7.2838C4.05086 7.71609 3.77025 8.1686 2.96382 8.1686C1.93173 8.10793 0.941919 7.73746 0.12362 7.10558C0.111359 7.09593 0.0962503 7.09059 0.0806445 7.09041C0.0389326 7.09041 0.00101274 7.13086 0.00101274 7.20417V9.01422C-0.00712221 9.09511 0.0342873 9.17294 0.105924 9.2114C0.918849 9.72386 1.86262 9.99031 2.82352 9.97865C3.6775 10.0823 4.53387 9.80523 5.16531 9.22101C5.79675 8.6368 6.13941 7.8045 6.10232 6.94505C6.10232 5.52811 5.33129 4.79626 3.52504 3.97466C2.21048 3.38438 1.9817 3.12905 1.9817 2.65631C1.9817 2.27711 2.20921 1.82966 3.06873 1.82966C3.93351 1.85465 4.77549 2.11275 5.50572 2.57668C5.52487 2.59065 5.54776 2.59858 5.57145 2.59943C5.6258 2.59943 5.66372 2.54508 5.66372 2.45787V0.847534C5.67451 0.750839 5.63489 0.655378 5.55881 0.594735C4.85745 0.188019 4.05445 -0.00976925 3.24443 0.0246721"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_3_Copy}    >
						<Text style = {noneModeStyles._Photo_card_psd}   >
							Мэдээлэлзүй.psd
						</Text>
						<Text style = {noneModeStyles._15_MB}   >
							15 MB
						</Text>
					</View>
				</View>
				<Text style = {noneModeStyles._Maria_Nkechi_Copy}   >
					А. Нэргүй
				</Text>
			</View>
			<View style = {noneModeStyles._Group_2_Copy}    >
				<View style = {noneModeStyles._Rectangle_11}    >
				</View>
				<View style = {noneModeStyles._Group_23}    >
					<View style = {noneModeStyles._Rectangle_12}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_4}    >
			</View>
			<View style = {noneModeStyles._user_6_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_user_6_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._user_6}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_user_6_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart___Copy_6_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_bar_chart___Copy_6_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._bar_chart___Copy_6} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_bar_chart___Copy_6;}}>
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_bar_chart___Copy_6_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._calendar___Copy_6_container}    >
				<View style = {noneModeStyles._calendar___Copy_6}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_calendar___Copy_6_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._home_6_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_home_6_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._home_6}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_home_6_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._camera_6_container}    >
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_bagshid_ireh_temdegelel

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_activity: {
	width: 347,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 64,
	},
_Activity: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 4},
		{translateY: -14},
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
__: {
	width: 4.03198,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 332.984},
		{translateY: 5.58401},
	],
	},
_activity_2: {
	width: 375,
	height: 599,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 116,
	},
_Group_2: {
	width: 343,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 16},
	],
	},
_Group: {
	width: 236,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
	],
	},
_Amarachi_Nkechi: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -14.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Updated_screen_on_Gr: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Just_now: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 298},
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_17_Copy: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 1,
	},
_Rectangle: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	transform: [
		{translateX: 99},
		{translateY: -93},
	],
	},
_Mask_2: {
	width: 40,
	height: 44,
	backgroundColor: "rgb(158, 150, 150)",
	position: "absolute",
	transform: [
		{translateX: 41.5},
		{translateY: 666},
	],
	},
_Mask_3: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_Rectangle_2: {
	width: 46.6667,
	height: 46.6667,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 61.3333},
		{translateY: -18.6667},
	],
	borderRadius: 25,
	},
_Rectangle_container: {
	width: 46.6667,
	height: 46.6667,
	position: "absolute",
	transform: [
		{translateX: -4},
		{translateY: -1.33334},
	],
	},
_Rectangle_3: {
	width: "100%",
	height: "100%",
	borderRadius: 25,
	},
_Group_2: {
	width: 195,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 66},
		{translateY: 346},
	],
	},
_Amarachi_Nkechi_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Updated_file_on_Resp: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: 46.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021_Copy_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: 128.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_3: {
	width: 196,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 82},
	],
	},
_Amar_Nkechi: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Add_photo_on_Grocery: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_2: {
	width: 208,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 428},
	],
	},
_Mario_Niketh: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Attachment_Landing_p: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy: {
	width: 186,
	height: 17,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 240},
	],
	},
_Attachment_Grocery_W: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -8.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Shawni_Pelikan: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 67},
		{translateY: 258.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Attachment_Grocery_W_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 63.2969,
	top: 583.5,
	bottom: -0.5625,
	right: 187.273,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Montserrat",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_13_05: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 335},
		{translateY: -217.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: -83.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021_Copy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: 258.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_4: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 61},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_5: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 407},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_9: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 537},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_3: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 187},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_4: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_container_2: {
	width: 59,
	height: 44,
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 131},
	],
	},
_Rectangle_5: {
	width: "100%",
	height: "100%",
	borderRadius: 2,
	},
_Rectangle_Copy_container: {
	width: 59,
	height: 44,
	position: "absolute",
	transform: [
		{translateX: 134},
		{translateY: 131},
	],
	},
_Rectangle_Copy: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 3.3},
		{translateY: 5.68434e-14},
	],
	borderRadius: 2,
	},
_Rectangle_Copy_2_container: {
	width: 59,
	height: 44,
	position: "absolute",
	transform: [
		{translateX: 201},
		{translateY: 131},
	],
	},
_Rectangle_Copy_2: {
	width: "100%",
	height: "100%",
	borderRadius: 2,
	},
_Rectangle_Copy_10: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 82,
	},
_Mask_4: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_5: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_3: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -2.73334},
	],
	},
_Rectangle_6: {
	width: "100%",
	height: "100%",
	},
_Rectangle_Copy_11: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 428,
	},
_Mask_6: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_7: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_4: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -2.73334},
	],
	},
_Rectangle_7: {
	width: "100%",
	height: "100%",
	},
_Rectangle_Copy_10_2: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 216,
	},
_Mask_8: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_9: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_5: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -1.36666},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	},
_Rectangle_Copy_12: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 558,
	},
_Mask_10: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_11: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_6: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -1.36667},
	],
	},
_Rectangle_9: {
	width: "100%",
	height: "100%",
	},
_Group_9: {
	width: 126,
	height: 40,
	position: "absolute",
	left: 67,
	top: 265,
	},
_vscode_icons_file_type_pdf: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_ViewBox: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_layer_3807d3: {
	position: "absolute",
	transform: [
		{translateX: 11.33},
		{translateY: 3.9525},
	],
	},
_layer_63f154: {
	},
_layer_de61b9: {
	position: "absolute",
	transform: [
		{translateX: 11.33},
		{translateY: 3.9525},
	],
	},
_layer_6cdf25: {
	},
_layer_f3401e: {
	position: "absolute",
	transform: [
		{translateX: 25.8275},
		{translateY: 3.9525},
	],
	},
_layer_57f8aa: {
	},
_layer_d18e5d: {
	position: "absolute",
	transform: [
		{translateX: 25.8275},
		{translateY: 3.9525},
	],
	},
_layer_aa71cd: {
	},
_layer_58aa0d: {
	position: "absolute",
	transform: [
		{translateX: 6.67377},
		{translateY: 8.12},
	],
	},
_layer_72b2c9: {
	},
_Shape: {
	width: 19.1479,
	height: 18.711,
	position: "absolute",
	transform: [
		{translateX: 13.5671},
		{translateY: 13.8937},
	],
	},
_layer_3d10b8: {
	position: "absolute",
	transform: [
		{translateX: 4.6875},
		{translateY: 6.21},
	],
	},
_layer_650ced: {
	},
_Shape_2: {
	width: 22.3825,
	height: 8.12375,
	position: "absolute",
	transform: [
		{translateX: 4.29626},
		{translateY: 5.775},
	],
	},
_Shape_3: {
	width: 10.4225,
	height: 4.86761,
	position: "absolute",
	transform: [
		{translateX: 10.3275},
		{translateY: 7.27094},
	],
	},
_Group_3: {
	width: 82,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 44},
		{translateY: 6},
	],
	},
_Presentation_pdf: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -14},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_5_MB: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -1},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_Copy_10_3: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 346,
	},
_Mask_12: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_13: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_7: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -2.73333},
	],
	},
_Rectangle_10: {
	width: "100%",
	height: "100%",
	},
_Group_11: {
	width: 134,
	height: 40,
	position: "absolute",
	left: 67,
	top: 477,
	},
_vscode_icons_file_type_photoshop2: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_ViewBox_2: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_layer_55b0f0: {
	position: "absolute",
	transform: [
		{translateX: 11.0463},
		{translateY: 2.5},
	],
	},
_layer_eed19b: {
	},
_layer_f2b2e2: {
	position: "absolute",
	transform: [
		{translateX: 2.81622},
		{translateY: 4.36626},
	],
	},
_layer_53834e: {
	},
_layer_0bff2e: {
	position: "absolute",
	transform: [
		{translateX: 30.1238},
		{translateY: 2.5},
	],
	},
_layer_5f75e8: {
	},
_Shape_4: {
	width: 3.57556,
	height: 6.29277,
	position: "absolute",
	transform: [
		{translateX: 8.875},
		{translateY: 6.10098},
	],
	},
_layer_05287c: {
	position: "absolute",
	transform: [
		{translateX: 13.6275},
		{translateY: 6.04642},
	],
	},
_layer_b17509: {
	},
_Shape_5: {
	width: 4.10254,
	height: 6.34402,
	position: "absolute",
	transform: [
		{translateX: 18.045},
		{translateY: 6.04607},
	],
	},
_Shape_6: {
	width: 7.80377,
	height: 12.7238,
	position: "absolute",
	transform: [
		{translateX: 16.7938},
		{translateY: 18.275},
	],
	},
_layer_d49948: {
	position: "absolute",
	transform: [
		{translateX: 25.6353},
		{translateY: 21.5018},
	],
	},
_layer_88e8e8: {
	},
_Group_3_Copy: {
	width: 90,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 44},
		{translateY: 6},
	],
	},
_Photo_card_psd: {
	width: 99.4737,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -14},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_15_MB: {
	width: 31.9737,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -1},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Maria_Nkechi_Copy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 67},
		{translateY: -82.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_2_Copy: {
	width: 310,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 37,
	top: 741,
	},
_Rectangle_11: {
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
		{translateX: 79},
		{translateY: 38},
	],
	},
_Rectangle_12: {
	width: 30,
	height: 2,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 3,
	},
_Ellipse_4: {
	width: 57,
	height: 56,
	position: "absolute",
	left: 172,
	top: 715,
	},
_user_6_container: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 310,
	top: 747,
	},
_user_6: {
	width: "100%",
	height: "100%",
	},
_bar_chart___Copy_6_container: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 250,
	top: 746,
	},
_bar_chart___Copy_6: {
	width: "100%",
	height: "100%",
	},
_calendar___Copy_6_container: {
	width: 31,
	height: 32,
	position: "absolute",
	left: 115,
	top: 744,
	},
_calendar___Copy_6: {
	width: "100%",
	height: "100%",
	},
_home_6_container: {
	width: 31,
	height: 31,
	position: "absolute",
	left: 47,
	top: 747,
	},
_home_6: {
	width: "100%",
	height: "100%",
	},
_camera_6_container: {
	width: 35,
	height: 34,
	backgroundColor: "rgb(253, 253, 253)",
	overflow: "visible",
	position: "absolute",
	left: 183,
	top: 726,
	transform: [
		{translateX: -1.2},
		{translateY: 8},
	],
	},
})

