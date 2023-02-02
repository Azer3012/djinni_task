import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Characters, Home, Locations } from '../screens'
import helpers from '../helpers/helpers'


const Stack=createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={helpers.screenOptions}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Characters' component={Characters}/>
        <Stack.Screen name='Locations' component={Locations}/>
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})