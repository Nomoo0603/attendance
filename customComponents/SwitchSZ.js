import * as React from 'react';
import { Text, View, StyleSheet, Animated, Button, Vibration } from 'react-native';


const SwitchSZ = (props) => {
  
  const [isSwitched, setIsSwitched] = React.useState(false);
  const [position, setPosition] = React.useState("flex-start");
  const [marginLeft, setMarginLeft] = React.useState(new Animated.Value(0));
  // let marginRight = 5;
  const [backgroundColor, setBackgroundColor] = React.useState(new Animated.Value(0));
  const turnOn = () => {
    setIsSwitched(true);
    Animated.timing(
      backgroundColor,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }
    ).start();
    Animated.timing(
      marginLeft,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }
    ).start();
    props.turnOn();
    Vibration.vibrate(1000);
  }

  const turnOff = () => {
    setIsSwitched(false);
    Animated.timing(
      backgroundColor,
      {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }
    ).start();
    Animated.timing(
      marginLeft,
      {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }
    ).start();
    props.turnOff();
  }


  const boxInterpolation =  marginLeft.interpolate({
    inputRange: [0, 1],
    outputRange: [0 , props.width-props.sliderWidth-props.horizontalPadding]
  })


  const color =  backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange:[props.backgroundColor , props.activeBackgroundColor]
  })
  return (
      <Animated.View
        style={[props.switchContainer, {backgroundColor: color, justifyContent: "center"}]}
        onStartShouldSetResponder = {() => {return true}}
        onResponderGrant = {() => {}} onResponderRelease = {() => {
          if (isSwitched){
            turnOff();
          } else {
            turnOn();
          }
        }} 
        onStartShouldSetResponderCapture = {() => true}
       >
        <Animated.View 
          style=
          {[props.slider ? props.slider : {backgroundColor: "white", borderRadius: props.sliderWidth/2}, 
            {
              position: "relative", 
              height: props.sliderHeight, 
              width: props.sliderWidth,
              marginLeft: boxInterpolation,
              left: 0,
              top: 0,
              transform: [
                {translateX: 0},
                {translateY: 0}
              ]
            }
          ]}
    
          ></Animated.View>
      </Animated.View>
  );
}

export default SwitchSZ;

