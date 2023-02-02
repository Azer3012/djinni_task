import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

const Card = ({character}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: character.image}} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Name:</Text>
        <Text style={styles.titleText}>{character.name}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Status:</Text>
        <Text style={styles.titleText}>{character.status}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Species:</Text>
        <Text style={styles.titleText}>{character.species}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gender:</Text>
        <Text style={styles.titleText}>{character.gender}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Origin:</Text>
        <Text style={styles.titleText}>{character.origin.name}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: (helpers.screenWidth - 44) / 2,
    borderColor: colors.main,
    borderRadius: helpers.px(8),
    paddingBottom: helpers.px(4),
    gap: helpers.px(5),
  },
  image: {
    height: helpers.px(120),
  },
  titleContainer: {
    paddingHorizontal: helpers.px(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...helpers.fontStyle('Bold', 12, colors.black),
  },
  titleText: {
    ...helpers.fontStyle('Regular', 12, colors.main),
    flexWrap: 'wrap',
  },
});
