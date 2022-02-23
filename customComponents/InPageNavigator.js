import React from 'react';
import { Text, View, StyleSheet, Animated,Button, Dimensions } from 'react-native';

const InPageNavigator = (props) => {
  const [index, setIndex] = React.useState(0);
  const translateX = React.useRef(new Animated.Value(0)).current


  const {
    height,
    width, 
    horizontalPaddings, 
    verticalPaddings, 
    horizontalBorders, 
    verticalBorders,
    childrenLength
  } = props;

  const childWidth = (width - horizontalBorders - horizontalPaddings)/childrenLength;
  const childHeight = height - verticalBorders - verticalPaddings;
  const activeTextColor = props.activeTextColor;
  const inActiveTextColor = props.inActiveTextColor;

  const recursiveMap = (children, activeTextColor) => {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, activeTextColor),
        style: {color: activeTextColor}
      });
    } else {
      child = React.cloneElement(child, {color: {color: activeTextColor}})
    }

    return child;
  });
  } 

  // const widhtX = (Dimensions.get("window").width - 16 - 16 - horizontalPaddings - horizontalBorders)/childrenLength;
  return (
      <View style={[props.navcontainer, {display: "flex", flexDirection: "row", height, width, justifyContent: "center", alignContent: "center"}]}>
        <Animated.View style={[props.slider, {
          position: "absolute",
          backgroundColor: props.sliderBackgroundColor,
          borderRadius: props.sliderRadius,
          left: horizontalPaddings/2,
          // top: verticalPaddings/2,
          // paddingLeft: 100,
          width: childWidth,
          height: childHeight,
          transform: [
            {translateX: translateX}
          ]
          }]}>
        </Animated.View>
      {
        
        props.children && props.children.map((child, i) => {
          const colorStyle = {};
          if (activeTextColor && index === i){
            colorStyle.color = activeTextColor
          } else {
            colorStyle.color = inActiveTextColor;
          }
            return (
            <View 
              style={{display: "flex", flex: 1,flexDirection: "row", justifyContent: "center", alignItems: "center", ...colorStyle}}
              onStartShouldSetResponder = {() => {return true}}
              onResponderGrant = {() => {}} onResponderRelease = {() => {
                setIndex(i);
                Animated.timing(translateX, {
                  toValue: childWidth*i,
                  duration: 100,
                  useNativeDriver: false
                }).start();
                const func = props[`onClick${i}`];
                func();
          }} 
            onStartShouldSetResponderCapture = {() => true}
          >
            {
              React.cloneElement(child, {
                children: recursiveMap(child.props.children, colorStyle.color),
                style: {color: colorStyle.color}
              })
            }
          </View>)
        })
      }
        
      </View>
  );
}

//  <View style={{
//         position: "absolute",
//         display: "flex",
//         flexDirection: "row",
//         backgroundColor: "green",
//         right: props.horizontalPaddings/2,
//         left: "auto",
//         // left: props.horizontalPaddings/2,
//         width: "100%", 
//         height: "100%",

//         }}>
//           <Animated.View style={[props.slider, {
//             position: "absolute",
//             backgroundColor: props.sliderBackgroundColor,
//             borderRadius: props.sliderRadius,
//             // left: horizontalPaddings/2,
//             // top: verticalPaddings/2,
//             // paddingLeft: 100,
//             width: `${100/childrenLength}%`,
//             height: childHeight,
//             zIndex: 100
//             // transform: [
//             //   {translateX: translateX}
//             // ]
//             }]}>
//           </Animated.View>
//       </View>


export default InPageNavigator;