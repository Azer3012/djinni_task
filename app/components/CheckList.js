import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import helpers from '../helpers/helpers';


const colors = {
  active: '#FCD259ff',
  inActive: '#FCD25900',
};
const spacing = 10;

const CheckList = ({data,setValue}) => {
  const [index, setIndex] = useState(0);
  const [viewPosition, setViewPosition] = useState(0);

  

  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition,
      viewOffset: spacing,
    });
  }, [index, viewPosition]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingLeft: spacing}}
        horizontal
        style={{flexGrow: 0}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index: fIndex}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
                setValue(item.name==="all"?'':item.name)
              }}>
              <View
                style={[
                  styles.item,
                  {
                    backgroundColor:
                      fIndex === index ? colors.active : colors.inActive,
                  },
                ]}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      
    </View>
  );
};

export default CheckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderRadius: helpers.px(12),
    borderColor: colors.active,
    borderWidth: 1,
    backgroundColor: colors.inActive,
    marginRight: spacing,
    padding: spacing,
    minWidth: helpers.px(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionsAndNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: helpers.px(30),
  },
  positions: {
    flexDirection: 'row',
  },
  indicators: {
    borderRadius: helpers.px(12),
    padding: spacing,
    marginRight: spacing,
    backgroundColor: colors.active,
  },
  text:{
    color:"black"
  },
  indicatorsText: {
    color: 'white',
  },
  navigations: {
    flexDirection: 'row',
  },
});
