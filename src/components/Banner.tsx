import React from "react";
import { Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
const WIDTH = Dimensions.get('window').width;
const numColumns = WIDTH > 600 ? 3 : 2;



const Banner = ({ route, ...item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity


            onPress={() => {

                navigation.navigate('Details', {
                    item: item,
                    poster_path: `https://image.tmdb.org/t/p/original${item.poster_path}`
                })
            }}

            style={[styles.button, { width: route == "home" ? 160 : '45%', }]}>
            <Image style={{ width: 140, height: 200, }} source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} />
            <Text style={styles.text}>{item.title || item.original_title || item.original_name}</Text>
        </TouchableOpacity>
    )
}



export default Banner;

