import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';


export function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection:"row", alignSelf:"center" }}>
        {/* HeaderButton */}
        <HeaderButton 
        text="Delivery" 
        btnColor = "black" 
        textColor = "white" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}

        />
      <HeaderButton 
        text="Apple" 
        btnColor = "white" 
        textColor = "black" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}

        />        
    </View>
  )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{ 
      backgroundColor : props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6, 
      paddingHorizontal:6,
      margin :15,
      borderRadius: 30 
      }}
      onPress = {() => props.setActiveTab(props.text)}
    >
      <Text style={{ 
        color: props.activeTab === props.text ? "white" : "black", 
        fontSize:15, 
        fontWeight:"900", 
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>  
);