import {ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import helpers from '../../helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setLocations } from '../../redux/features/locationsSlice';
import LocationItem from '../../components/LocationItem';
import colors from '../../values/colors';

const Locations = () => {
  const dispatch=useDispatch()
  const locations=useSelector(state=>state.locations.list)
  const loading=useSelector(state=>state.locations.loading)
  const [refreshing, setRefreshing] = useState(false);

  const getLocations=async()=>{
    try {
      const response=await helpers.api().get('/location')

      dispatch(setLocations(response.data.results))

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getLocations()
  },[])

  const onRefresh = async () => {
    setRefreshing(true);
    await getLocations();
    setRefreshing(false);
  };



  const renderLocation=({item})=><LocationItem location={item}/>
  return (
    <Layout type={"general"} headerText={"Locations"}>
      <View style={styles.container}>
       {!loading?<FlatList
        data={locations}
        keyExtractor={item=>item.id}
        renderItem={renderLocation}
        contentContainerStyle={{gap:10,paddingBottom:20}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            colors={[colors.main]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
       />:<ActivityIndicator size={'large'} color={colors.main} />}
      </View>
    </Layout>
  );
};

export default Locations;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:helpers.px(16),
    paddingTop:helpers.px(16),
    backgroundColor:colors.main14
  }
});
