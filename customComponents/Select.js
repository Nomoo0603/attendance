import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View} from 'react-native'


export const Select = (props) => {

  // const [valu]

  const {
    // height,
    pickerStyle,
    items,
    pickerValue,
    setPickerValue
  } = props;

  const selectItems = items.map(item => {
    return {
      label: item,
      value: item
    }
  })

  return (
    <View style={{height: "100%", width: "100%"}}>
      <RNPickerSelect
        // style={{height: "100%"}}
      useNativeAndroidPickerStyle={false}
            style={{
              placeholder: {
                color: "black",
                marginLeft: 10
              },
              viewContainer: {
                position: "absolute",
                left: 0,
                top: 0,
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",

              },
              inputIOS: {
                backgroundColor: "transparent",
                color: "transparent",
                width: "100%",
                height: "100%",
                border: "none",
              },
              inputWeb: {
                backgroundColor: "transparent",
                color: "transparent",
                border: "none",
                width: "100%",
                height: "100%"
              },
              inputAndroid: {
                backgroundColor: "transparent",
                color: "transparent",
                width: "100%",
                height: "100%",
                border: "none",
              }
            }}
            value={pickerValue}
            onValueChange={(value) => setPickerValue(value)}
            items={selectItems}
        />
        </View>
  )

}