import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import restaurantData, { LocalRestaurants } from 
"../components/RestaurantItems";




//const FOUR_SQ_API_KEY = "fsq3l2TTJc7rP/CosIqj/RiXlL3ffDIYMWCH52ZqbbeiF8Q=";
const foursquare = require('react-foursquare')({
  clientID: 'CGUEXGOE0E5CRH4RKUZOY5L3D12POC2MPJIXB1KGDHVTO450',
  clientSecret: 'H2WSTSZJEMEFRCGPMHDQSOPYFKLMZ41JAA1KBFTUGBMGZAWA'  
});


var params = {
    "ll": "10.652814,-61.3969835",
  "query": 'Movie Towne'
};
 


export default function Home(props) {
 
const [restaurantData, setRestaurantData] = React.useState(LocalRestaurants);

 useEffect(() => { 
    foursquare.venues.getVenues(params)
      .then(function(venues) {
    		//alert(JSON.stringify(venues));
        var jarray = venues.response.venues
        alert(JSON.stringify(jarray[0]))
       
    	})
      .catch(function(err){
       alert(err);
      });
 }, []);

	return (
		<SafeAreaView style = {{backgroundColor: "#eee", flex: 1 }}>
			<View style = {{backgroundColor: "white", padding: 15}}>
			 <HeaderTabs />
			 <SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator = {false}>
				<Categories />
				<RestaurantItems restaurantData = {restaurantData}/>
				
			</ScrollView>
		</SafeAreaView>
		);
}