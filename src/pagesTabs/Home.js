import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import Banner from '../components/Banner'
import { dataServiceGet } from '../service/api'
import { Localization } from 'expo'
import styles from './styles'


function Home() {

    // console.log(Localization)

    const [popular, setPopular] = useState([])
    const [lancamentos, setLancamentos] = useState([])
    const [Loading, setLoading] = useState(false)
    const [LoadingTwo, setLoadingTwo] = useState(false)


    useEffect(() => {
        setLoading(true)
        setLoadingTwo(true)

        getPopular()
        getLatest()

        setLoading(false)
        setLoadingTwo(false)
    }, [])

    async function getPopular() {
        await dataServiceGet(
            {
                uri: 'discover/movie?api_key=bc51889d5e1c64d6502c03772e6f4adf&language=en-US&page=1'
            }).then((response) => {
                setPopular(response.results)
                console.log(response.results)
            }).catch(() => {
                console.log("error")
            })

    }
    async function getLatest() {
        await dataServiceGet({
            uri: 'trending/all/day?api_key=bc51889d5e1c64d6502c03772e6f4adf&language=en-US&page=1'
        }).then((response) => {
            setLancamentos(response.data.results)
            console.log(response.data.results)
        }).catch(() => {
            console.log("error")
        })

    }


    return (
        <>
            <ScrollView style={{ backgroundColor: '#252525', flex: 1, }}>
                <View style={{ marginTop: 20 }}>

                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Populares</Text>
                    {Loading ?
                        <ActivityIndicator style={{ marginTop: 15 }} />
                        :
                        null
                    }
                    <FlatList
                        horizontal
                        pagingEnabled
                        decelerationRate={0}
                        style={{ marginBottom: 20 }}
                        // snapToAlignment={'center'}
                        data={popular}
                        renderItem={({ item }) => <Banner route="home"{...item} />}
                        keyExtractor={(item, index) => item.id.toString()}
                    // showsHorizontalScrollIndicator={false}
                    />
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Próximos lançamentos</Text>
                    {LoadingTwo ?
                        <ActivityIndicator style={{ marginTop: 15 }} />
                        :
                        null
                    }
                    <FlatList
                        horizontal
                        style={{ marginBottom: 40, }}
                        data={lancamentos}
                        renderItem={({ item }) => <Banner route="home" {...item} />}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
                </View>
            </ScrollView>
        </>
    );
}


export default Home;