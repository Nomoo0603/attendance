import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_irts from "./pages/Page_irts/Page_irts.js";
import Page_form_cholootei from "./pages/Page_form_cholootei/Page_form_cholootei.js";
import Page_form_owchtei from "./pages/Page_form_owchtei/Page_form_owchtei.js";
import Page_angiin_medeelel from "./pages/Page_angiin_medeelel/Page_angiin_medeelel.js";
import Page_bagshid_ireh_temdegelel from "./pages/Page_bagshid_ireh_temdegelel/Page_bagshid_ireh_temdegelel.js";
import Page_temdegelelud_suragch from "./pages/Page_temdegelelud_suragch/Page_temdegelelud_suragch.js";
import Page_contact_details from "./pages/Page_contact_details/Page_contact_details.js";
import Page_uuriin_idewhi__1 from "./pages/Page_uuriin_idewhi__1/Page_uuriin_idewhi__1.js";
import Page_nuur from "./pages/Page_nuur/Page_nuur.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_irtsStackNavigator = createStackNavigator();
const ScreenForPage_irts = () => {
	return (
		<Page_irtsStackNavigator.Navigator>
			<Page_irtsStackNavigator.Screen
				name = "Page_irts"
				component = {Page_irts}
				options = {{
					headerShown: false
				}}
			/>
		</Page_irtsStackNavigator.Navigator>
	)
};
const Page_form_cholooteiStackNavigator = createStackNavigator();
const ScreenForPage_form_cholootei = () => {
	return (
		<Page_form_cholooteiStackNavigator.Navigator>
			<Page_form_cholooteiStackNavigator.Screen
				name = "Page_form_cholootei"
				component = {Page_form_cholootei}
				options = {{
					headerShown: false
				}}
			/>
		</Page_form_cholooteiStackNavigator.Navigator>
	)
};
const Page_form_owchteiStackNavigator = createStackNavigator();
const ScreenForPage_form_owchtei = () => {
	return (
		<Page_form_owchteiStackNavigator.Navigator>
			<Page_form_owchteiStackNavigator.Screen
				name = "Page_form_owchtei"
				component = {Page_form_owchtei}
				options = {{
					headerShown: false
				}}
			/>
		</Page_form_owchteiStackNavigator.Navigator>
	)
};
const Page_angiin_medeelelStackNavigator = createStackNavigator();
const ScreenForPage_angiin_medeelel = () => {
	return (
		<Page_angiin_medeelelStackNavigator.Navigator>
			<Page_angiin_medeelelStackNavigator.Screen
				name = "Page_angiin_medeelel"
				component = {Page_angiin_medeelel}
				options = {{
					headerShown: false
				}}
			/>
		</Page_angiin_medeelelStackNavigator.Navigator>
	)
};
const Page_bagshid_ireh_temdegelelStackNavigator = createStackNavigator();
const ScreenForPage_bagshid_ireh_temdegelel = () => {
	return (
		<Page_bagshid_ireh_temdegelelStackNavigator.Navigator>
			<Page_bagshid_ireh_temdegelelStackNavigator.Screen
				name = "Page_bagshid_ireh_temdegelel"
				component = {Page_bagshid_ireh_temdegelel}
				options = {{
					headerShown: false
				}}
			/>
		</Page_bagshid_ireh_temdegelelStackNavigator.Navigator>
	)
};
const Page_temdegelelud_suragchStackNavigator = createStackNavigator();
const ScreenForPage_temdegelelud_suragch = () => {
	return (
		<Page_temdegelelud_suragchStackNavigator.Navigator>
			<Page_temdegelelud_suragchStackNavigator.Screen
				name = "Page_temdegelelud_suragch"
				component = {Page_temdegelelud_suragch}
				options = {{
					headerShown: false
				}}
			/>
		</Page_temdegelelud_suragchStackNavigator.Navigator>
	)
};

const Page_cameraStackNavigator = createStackNavigator();
const ScreenForPage_camera = () => {
	return (
		<Page_cameraStackNavigator.Navigator>
			<Page_cameraStackNavigator.Screen
				name = "Page_camera"
				component = {Page_camera}
				options = {{
					headerShown: false
				}}
			/>
		</Page_cameraStackNavigator.Navigator>
	)
};

const Page_contact_detailsStackNavigator = createStackNavigator();
const ScreenForPage_contact_details = () => {
	return (
		<Page_contact_detailsStackNavigator.Navigator>
			<Page_contact_detailsStackNavigator.Screen
				name = "Page_contact_details"
				component = {Page_contact_details}
				options = {{
					headerShown: false
				}}
			/>
		</Page_contact_detailsStackNavigator.Navigator>
	)
};
const Page_uuriin_idewhi__1StackNavigator = createStackNavigator();
const ScreenForPage_uuriin_idewhi__1 = () => {
	return (
		<Page_uuriin_idewhi__1StackNavigator.Navigator>
			<Page_uuriin_idewhi__1StackNavigator.Screen
				name = "Page_uuriin_idewhi__1"
				component = {Page_uuriin_idewhi__1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_uuriin_idewhi__1StackNavigator.Navigator>
	)
};
const Page_nuurStackNavigator = createStackNavigator();
const ScreenForPage_nuur = () => {
	return (
		<Page_nuurStackNavigator.Navigator>
			<Page_nuurStackNavigator.Screen
				name = "Page_nuur"
				component = {Page_nuur}
				options = {{
					headerShown: false
				}}
			/>
		</Page_nuurStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						{/* <Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/>  */}
						<Tab.Screen
							name = "Page_camera"
							component = {ScreenForPage_camera}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_irts"
							component = {ScreenForPage_irts}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_form_cholootei"
							component = {ScreenForPage_form_cholootei}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_form_owchtei"
							component = {ScreenForPage_form_owchtei}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_angiin_medeelel"
							component = {ScreenForPage_angiin_medeelel}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_bagshid_ireh_temdegelel"
							component = {ScreenForPage_bagshid_ireh_temdegelel}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_temdegelelud_suragch"
							component = {ScreenForPage_temdegelelud_suragch}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_contact_details"
							component = {ScreenForPage_contact_details}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_uuriin_idewhi__1"
							component = {ScreenForPage_uuriin_idewhi__1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_nuur"
							component = {ScreenForPage_nuur}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

