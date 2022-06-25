import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function SearchBar() {
  return (
    <View style = {{ marginTop: 15, flexDirection: "row"}} >
       <GooglePlacesAutocomplete 
       placeholder = "Search"
       styles = {{
       	textInput: {
       		backgroundColor: "#eee",
       		borderRadius: 10,
       		fontWeight: "700",
       		marginTop: 5,
       	},
       	textInputContainer: {
       		backgroundColor: "#eee",
       		borderRadius: 20,
       		flexDirection: "row",
       		alignItems: "center",
       		marginRight: 5,
       	},
       }}
        
       renderLeftButton = {() => ( 
       	<View style = {{ marginLft: 10 }} >
       		<Ionicons name = "location-sharp" size = {24} />
       	</View>
       	)}
   
       renderRightButton = {() => ( 
        <View 
          style = {
            {
            flexDirection : "row",
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
            alignItems: "center",
           }
          }
         >
          <AntDesign 
           name = "clockcircle" 
           size = {18} 
           style = {{marginRight:  6 }} 
          />
         <View>
           <Text style = {{fontWeight: "500", fontSize: 15 }}>Search</Text>
         </View>
        </View>
        )}
       />
    </View>
  );
}
