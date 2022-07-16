import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

export default function Categories() {
    const items = [
        {
            image: require("../assets/images/shopping-bag.png"),
            text: "Pick-up"
        },
        {
            image: require("../assets/images/bread.png"),
            text: "Bakery Items"
        },
        {
            image: require("../assets/images/fast-food.png"),
            text: "Fast Food"
        },
        {
            image: require("../assets/images/deals.png"),
            text: "Deals"
        },
        {
            image: require("../assets/images/coffee.png"),
            text: "Coffee & Tea"
        }
    ]
  return (
    <ScrollView horizontal>
        <View>
            <Image source={items[0].image} 
            style={{
                width:50, 
                height:40, 
                resizeMode: "contain"
            }}/>
            <Text 
            style={{ 
                fontSize:13, 
                fontWeight: "900" 
            }}>{items[0].text}
            </Text>
        </View>
    </ScrollView>
    
  )
}