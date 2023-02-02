import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Layout from '../../Layout';
import helpers from '../../helpers/helpers';
import colors from '../../values/colors';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Layout type={'general'} headerText="Home" hasBackButton={false}>
      <View
        // source={require('../../assets/images/cover.png')}
        style={styles.container}>
        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Characters')}
            style={styles.btn}>
            <Text style={styles.btnText}>Characters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Locations')}
            style={styles.btn}>
            <Text style={styles.btnText}>Locations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: helpers.px(16),
    backgroundColor:colors.main14
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btn: {
    width: '100%',
    height: helpers.px(35),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: helpers.px(8),
  },
  btnText: {
    ...helpers.fontStyle('Regular', 14, colors.white),
  },
});
