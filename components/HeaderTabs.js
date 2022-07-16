import { View, Text } from 'react-native';
import React from 'react'

export function HeaderTabs() {
  return (
    <View>
        {/* HeaderButton */}
        <HeaderButton/>
        <HeaderButton/>
        <HeaderButton/>
        
    </View>
  )
}

const HeaderButton = () => (
<Text>Delivery</Text>
);