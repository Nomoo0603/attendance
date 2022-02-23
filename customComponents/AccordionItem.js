import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const AccordionItem = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);


  const {
    iconColor,
    iconSize,
    openStateIconName,
    closeStateIconName
  } = props;

  let icon = isOpen ? 
      <Icon name={openStateIconName} size={iconSize} color={iconColor} />
      :
      <Icon name={closeStateIconName} size={iconSize} color={iconColor} />
  if (props.children.length === 4 && props.children[2] && props.children[3]){
    icon = isOpen ? props.children[2] : props.children[3];
  }

  return (
    <View style={{display: "flex", flexDirection: "column", width: "auto", height: "auto"}}>
      <TouchableWithoutFeedback onPress={() => {setIsOpen(!isOpen)}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          {props.children[0]}
          {
            icon
          }
        </View>
      </TouchableWithoutFeedback>
      {
        isOpen && 
        props.children[1]
      }
    </View>
  );
}