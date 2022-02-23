import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, Text, Button, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

export const Map = (props) => {


  const {
    markers,
    setMarkers,
    isDraggable,
    isMarkerAdditionEnabled,
    isMarkerDeletionEnabled,
    initialLatitude,
    initialDeltaLatitude,
    initialLongitude,
    initialDeltaLongitude
  } = props;

  const [pressCoordinate, setPressCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })
  const [markerTitle, setMarkerTitle] = useState("");
  const [markerDescription, setMarkerDescription] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isMarkerSetupOpen, setIsMarkerSetupOpen] = useState(false);
  const [isMarkerInfoOpen, setIsMarkerInfoOpen] = useState(false);

  const onLongPress = (e) => {
    if (isMarkerAdditionEnabled){
      setPressCoordinate(e.nativeEvent.coordinate);
      setIsMarkerSetupOpen(true);
    }
  }

  const addMarker = () => {
    if (isMarkerAdditionEnabled){
      const newMarker = {
        coordinate: pressCoordinate,
        title: markerTitle,
        description: markerDescription
      }
      setMarkers([...markers, newMarker])
      setIsMarkerSetupOpen(false);
    }
  }


  const onMarkerPress = (index, e) => {
    if (isMarkerDeletionEnabled){
      setIsMarkerInfoOpen(true);
      let selectedMarker = markers[index];
      selectedMarker.index = index;
      setSelectedMarker(selectedMarker);
    }
  }

  const deleteMarker = (index ,e) => {
    const newMarkers = markers.filter((marker, index) => {
      return index !== selectedMarker.index
    })
    setMarkers(newMarkers);
    setIsMarkerInfoOpen(false);
  }

  const dragMarker = (markerIndex, e) => {
    if (isDraggable){
      const newMarkers = markers;
      newMarkers[markerIndex].coordinate.latitude = e.nativeEvent.coordinate.latitude;
      newMarkers[markerIndex].coordinate.longitude = e.nativeEvent.coordinate.longitude;
      setMarkers(newMarkers);
    }
  }

  return (
    <View
      style={{width: "100%", height: "100%"}}
    >
      <MapView
        style={{
          width: "100%",
          height: "100%"
        }}
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: initialDeltaLatitude,
          longitudeDelta: initialDeltaLongitude,
        }}
        onLongPress={onLongPress}
        // onMarkerPress={onMarkerPress}
        // provider={"google"}
        // showsUserLocation={true}
        // followsUserLocation={true}
        showsMyLocationButton={true}

      >
        {
          markers.map((marker, index) => {
            return <Marker 
              draggable={isDraggable}
              index={index}
              coordinate={marker.coordinate} 
              title={marker.title}
              description={marker.description}
              onPress = {(e) => onMarkerPress(index, e)}
              onDrag = {(e) => dragMarker(index, e)}
             />
          })
        }
      </MapView>
      {
        isMarkerSetupOpen && 
        <View style={styles.markerSetupContainer}>
          <View style={styles.markerSetupHeader}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                borderRadius: 8,
                backgroundColor: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
        
              onPress={() => setIsMarkerSetupOpen(false)}
            >
              <Text>close</Text>
            </TouchableOpacity>    
          </View>
          <View style={styles.markerSetupBody}>
              <Text style={{marginBottom: 5, color: "gray"}}>Marker title:</Text>
              <TextInput 
                style={[styles.input, {marginBottom: 10}]}
                placeholder="enter title of marker"
                onChangeText={(value => setMarkerTitle(value))}
                value={markerTitle}
              />
              <Text style={{marginBottom: 5, color: "gray"}}>Marker description:</Text>
              <TextInput 
                style={[styles.input]}
                placeholder="enter description of marker"
                onChangeText={(value => setMarkerDescription(value))}
                value={markerDescription}
              />   

              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 37,
                  borderRadius: 8,
                  backgroundColor: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "auto",
                  marginBottom: 20
                }}
        
                onPress={addMarker}
              >
                <Text>Submit</Text>
              </TouchableOpacity>   
          </View>        
        </View>        
      }
      {     
        isMarkerInfoOpen && 
        <View style={styles.markerSetupContainer}>
          <View style={styles.markerSetupHeader}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                borderRadius: 8,
                backgroundColor: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
        
              onPress={() => setIsMarkerInfoOpen(false)}
            >
              <Text>close</Text>
            </TouchableOpacity>    
          </View>
          <View style={styles.markerSetupBody}>
              <Text style={{marginBottom: 5, color: "gray"}}>Marker title:</Text>
              <TextInput 
                style={[styles.input, {marginBottom: 10}]}
                placeholder="enter title of marker"
                // onChangeText={(value => setMarkerTitle(value))}
                value={selectedMarker.title}
              />
              <Text style={{marginBottom: 5, color: "gray"}}>Marker description:</Text>
              <TextInput 
                style={[styles.input]}
                placeholder="enter description of marker"
                value={selectedMarker.description}
              />   

              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 37,
                  borderRadius: 8,
                  backgroundColor: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "auto",
                  marginBottom: 20
                }}
        
                onPress={deleteMarker}
              >
                <Text>Delete</Text>
              </TouchableOpacity>   
          </View>        
        </View>        
      }      
    
    </View>    
  )
}



const styles = StyleSheet.create({
  markerSetupContainer: {
    width: "100%",
    height: 280, 
    position: "absolute",
    bottom: 0, 
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex"
  },
  markerSetupHeader: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10

  },
  markerSetupBody: {
    width: "100%",
    flexGrow: 1, 
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    width: "100%", 
    height: 37,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    paddingRight: 10
  }
});
