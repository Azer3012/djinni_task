import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NetworkIcon from 'react-native-vector-icons/Feather';
import colors from '../values/colors';
import helpers from '../helpers/helpers';

const NetWorkConnection = () => {
  return (
    <View style={styles.container}>
      <NetworkIcon name="wifi-off" size={40}  color={colors.main} />
      <Text style={styles.text}>Check your network connection!</Text>
    </View>
  );
};

export default NetWorkConnection;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        ...helpers.fontStyle("Bold",16),
        marginTop:helpers.px(12)
    }
});
