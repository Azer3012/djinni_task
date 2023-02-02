import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stacks from './app/Stacks/Stacks'
import { Provider } from 'react-redux'
import {store} from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})