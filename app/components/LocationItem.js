import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../values/colors'
import helpers from '../helpers/helpers'
import { useNavigation } from '@react-navigation/native'

const LocationItem = ({location}) => {
    const navigation=useNavigation()


    const collectIds=(data)=>{
        let ids=[]
        data.forEach(item=>{
            let id=item.replace("https://rickandmortyapi.com/api/character/","")
            ids.push(id)
        })

        console.log(ids);
        navigation.navigate("Characters",{ids})
    }
  return (
    <TouchableOpacity onPress={()=>collectIds(location.residents)} style={styles.container}>
      <Text style={styles.text}><Text style={styles.subText}>Name:</Text>{location.name}</Text>
      <Text style={styles.text}><Text style={styles.subText}>Type:</Text>{location.type}</Text>
      <Text style={styles.text}><Text style={styles.subText}>Dimension:</Text>{location.dimension}</Text>
      <Text style={styles.text}><Text style={styles.subText}>Resident of Number:</Text>{location.residents.length}</Text>
    </TouchableOpacity>
  )
}

export default LocationItem

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.main,
        borderRadius:helpers.px(8),
        padding:10
        
    },
    text:{
        ...helpers.fontStyle("Regular",14),
        
    },
    subText:{
        ...helpers.fontStyle("Bold",14)

    }
})