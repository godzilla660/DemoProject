import React, {useState} from "react";
import { View, Text, TouchableOpacity,  } from "react-native";

export default function HeaderTabs () {
	const [activeTab, setActiveTab] = useState("Delivery");
	
	return (
		<View style = {{flexDirection: "row", alignSelf: "center", marginTop: 40 }}>
			<HeaderButton
			 text = "Delivery" 
			 btnColor = "black" 
			 textColor = "white" 
			 activeTab = {activeTab} 
			 setActiveTab = {setActiveTab} 
			 />
            <HeaderButton
			 text = "Pickup" 
			 btnColor = "white" 
			 textColor = "black" 
			 activeTab = {activeTab} 
			 setActiveTab = {setActiveTab} 
			 />
		</View> 
		);
}

const HeaderButton = (props) => (
 	<TouchableOpacity 
 	style = {{
 		backgroundColor: props.activeTab == props.text ? "black" : "white", 
 		paddidingVertical: 30,
 		paddingHorizontal: 16,
 		borderRadius: 36
 	}}
 	onPress = {() => props.setActiveTab(props.text)}
 	>
  		<Text 
  		 style = {{ 
  		 	color: props.activeTab == props.text ? "white" : "black", 
  			fontSize: 25, 
  			fontWeight: "900"
  	    }}
  	    > 
  	    {props.text} 
  	    </Text>
  	</TouchableOpacity>

);