import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from 'react'
import CharacterList from "../screens/CharacterList"
import CharacterScreen from "../screens/CharacterScreen"
import EpisodesScreen from "../screens/EpisodesScreen"

export type RootBottomTabPropTypes = {
    // Navigator: undefined;
    CharacterScreen: undefined;
    CharacterList: undefined;
    EpisodesScreen: undefined;
}

export default function TabNavigator() {

    const Tab = createBottomTabNavigator<RootBottomTabPropTypes>()

    return(
        <Tab.Navigator>
            <Tab.Screen name="CharacterList" component={CharacterList}/>
            <Tab.Screen name="CharacterScreen" component={CharacterScreen}/>
            <Tab.Screen name="EpisodesScreen" component={EpisodesScreen}/>
        </Tab.Navigator>
    )
}