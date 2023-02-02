import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Layout from '../../Layout';
import {useDispatch, useSelector} from 'react-redux';
import {setCharacters} from '../../redux/features/charactersSlice';
import helpers from '../../helpers/helpers';
import colors from '../../values/colors';
import Card from '../../components/Card';
import {debounce} from 'lodash';
import CheckList from '../../components/CheckList';
import {useRoute} from '@react-navigation/native';
import NoData from 'react-native-vector-icons/FontAwesome5';
import NetWorkConnection from '../../components/NetWorkConnection';

const Characters = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const characters = useSelector(state => state.characters.list);
  const isConnected = useSelector(state => state.network.isConnected);
  const loading = useSelector(state => state.characters.loading);
  const [refreshing, setRefreshing] = useState(false);
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const route = useRoute();

  const ids = route?.params?.ids;

  const idFromLocation = ids?.join();

  let url = idFromLocation
    ? `/character/${idFromLocation}`
    : `/character/?name=${name}&status=${status}&gender=${gender}`;

  const onRefresh = async () => {
    setRefreshing(true);
    setName('');
    await getCharacters();
    setRefreshing(false);
  };

  const getCharacters = async () => {
    try {
      const response = await helpers.api().get(url);
      dispatch(setCharacters(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCharacters();
  }, [name, status, gender, idFromLocation]);

  const handler = useCallback(
    debounce(text => {
      setName(text);
    }, 800),
    [],
  );

  const renderCharacter = ({item}) => <Card character={item} />;

  console.log({isConnected});

  return (
    <Layout type={'general'} headerText={'Characters'}>
      {isConnected ? (
        <View style={styles.container}>
          {!loading ? (
            <FlatList
              data={ids ? characters : characters.results}
              keyExtractor={item => item.id}
              ListHeaderComponent={
                <View style={styles.header}>
                  {!ids && (
                    <TextInput
                      defaultValue={name}
                      onChangeText={value => handler(value)}
                      style={styles.input}
                      placeholder="Search Name"
                      placeholderTextColor={colors.black}
                    />
                  )}
                  {!ids && (
                    <View style={styles.statusList}>
                      <Text style={styles.checkListTitle}>Gender</Text>
                      <CheckList
                        data={[
                          {
                            id: helpers.uniqid(),
                            name: 'all',
                          },
                          {
                            id: helpers.uniqid(),
                            name: 'female',
                          },
                          {
                            id: helpers.uniqid(),
                            name: 'male',
                          },
                          {
                            id: helpers.uniqid(),
                            name: 'genderless',
                          },
                          {
                            id: helpers.uniqid(),
                            name: 'unknown',
                          },
                        ]}
                        setValue={setGender}
                      />
                    </View>
                  )}
                  {!ids && (
                    <View style={styles.statusList}>
                      <Text style={styles.checkListTitle}>Status</Text>
                      <CheckList
                        data={[
                          {
                            id: helpers.uniqid(),
                            name: 'all',
                          },
                          {
                            id: helpers.uniqid(),
                            name: 'alive',
                          },
                          {
                            id: helpers.uniqid(),
                            name: 'dead',
                          },

                          {
                            id: helpers.uniqid(),
                            name: 'unknown',
                          },
                        ]}
                        setValue={setStatus}
                      />
                    </View>
                  )}
                </View>
              }
              renderItem={renderCharacter}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              contentContainerStyle={{gap: 15, paddingBottom: 20}}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  colors={[colors.main]}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              ListEmptyComponent={() => (
                <View style={styles.noData}>
                  <Text style={styles.noDataText}>No Data</Text>
                  <NoData name="box-open" size={25} color={colors.main} />
                </View>
              )}
            />
          ) : (
            <ActivityIndicator size={'large'} color={colors.main} />
          )}
        </View>
      ) : (
        <NetWorkConnection />
      )}
    </Layout>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main14,
    paddingHorizontal: helpers.px(16),
    paddingTop: helpers.px(16),
  },
  input: {
    borderWidth: 1,
    borderColor: colors.main,
    height: helpers.px(40),
    borderRadius: helpers.px(8),
    paddingLeft: helpers.px(16),
    marginBottom: helpers.px(8),
    color: colors.black,
  },

  statusList: {
    marginBottom: helpers.px(12),
  },
  checkListTitle: {
    ...helpers.fontStyle('Bold', 14),
    marginBottom: helpers.px(12),
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    ...helpers.fontStyle('Bold', 14),
    marginBottom: helpers.px(8),
  },
});
