import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'
import styles from './styles'
import params from '../models/details'

function Detail() {
    const route = useRoute()
    const routeParams = route.params as params;

    return (
        <View style={{ backgroundColor: "#252525", flex: 1 }}>
            {/* <Text>aa</Text> */}
            <Image

                style={styles.img} source={{ uri: routeParams.poster_path }} />
            <Text style={[styles.text, { fontSize: 18 }]}>Título: {routeParams.item.original_title || routeParams.item.original_name || routeParams.item.title}</Text>
            <Text style={styles.text}>
                Resumo: <Text style={{ fontWeight: '200', paddingLeft: 5 }}>{routeParams.item.overview}</Text>
            </Text>
        </View>);
}

export default Detail;

