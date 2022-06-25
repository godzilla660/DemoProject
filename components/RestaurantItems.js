import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const LocalRestaurants = [
	{
	name: "Shephard's Resort",
	image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
	categories: ["Cafe", "Bar"],
	reviews: 1244,
	rating: 4.5,
    },
    {
	name: "L. Bogoria Spa & Resort",
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCe2_qZneiTUkw64y19r8um5CjRiBS6KavQ&usqp=CAU",
	categories: ["Motel", "Bar"],
	reviews: 1244,
	rating: 4.8,
    },
    {
	name: "Moran Rock Marigat",
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHDC8JcM_p2WDw0O1vYP7sZmdC_NAhk8Bcg&usqp=CAU",
	categories: ["Restaurant & Grill", "Bar"],
	reviews: 1244,
	rating: 5.0,
    },

];


export default function RestaurantItems(props) {
	return (
		<TouchableOpacity activeOpacity = {1} style = {{ marginBottom: 20 }} >
			{props.restaurantData.map((restaurant, index) => (
			<View 
			key = {index}
			style = {{
				marginTop: 10, 
				padding: 15, 
				backgroundColor: "#fff",
			}}
			>
			  <RestaurantImage image = {restaurant.image_url}/>
			  <RestaurantInfo 
			  name = {restaurant.name} 
			  rating = {restaurant.rating}
			  />
			</View>
			))}
		</TouchableOpacity>
		);
}

const RestaurantImage = (props) => (
	<>
		<Image source = {{
			uri: props.image,
		}}
		style = {{ width: "100%", height: 180 }}
		/>
		<TouchableOpacity style = {{ position: "absolute", right: 20, top: 20 }}>
			<MaterialCommunityIcons name = "heart-outline" size = {25} color = "white" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View style = {{
		flexDirection: "row", 
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	}}>
		<View>
			<Text style = {{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
			<Text style = {{ fontSize: 13, color: "gray" }}> 30-45 mins</Text>
		</View>
		<View style = {{ 
			backgroundColor: "#eee", 
			height: 30, 
			width: 30,
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 15
			 }}
	    >
		    <Text>{props.rating}</Text>
		</View>
  
	</View>
)