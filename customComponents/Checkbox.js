import * as React from 'react';
import { Text, View, StyleSheet, Animated, Button } from 'react-native';


const Checkbox = (props) => {
  
  const [isChecked, setIsChecked] = React.useState(false);
  const [position, setPosition] = React.useState("flex-start");
  const [marginLeft, setMarginLeft] = React.useState(new Animated.Value(0));
  // let marginRight = 5;
  const [backgroundColor, setBackgroundColor] = React.useState(new Animated.Value(0));
  const turnOn = () => {
    setIsChecked(true);
    props.turnOn();
  }

  const turnOff = () => {
    setIsChecked(false);
    props.turnOff();
  }

  const borderColor = isChecked ? props.activeBorderColor : props.inactiveBorderColor;

  return (
      <Animated.View
        style={[props.checkboxContainer, {borderColor, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}]}
        onStartShouldSetResponder = {() => {return true}}
        onResponderGrant = {() => {}} onResponderRelease = {() => {
          if (isChecked){
            turnOff();
          } else {
            turnOn();
          }
        }} 
        onStartShouldSetResponderCapture = {() => true}
       >
       {
         isChecked &&
        <View style={props.check ? props.check : [{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "green",
          transform: [
            {translateX: 0},
            {translateY: 0},
	        ],
          left: 0,
          top: 0
        }]}>
        </View>
       }
      </Animated.View>
  );
}


export default Checkbox;