import React, { useRef, useState } from "react";
import { View, Text, Animated, ActivityIndicator, FlatList, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons, } from '@expo/vector-icons';
import Banner from '../components/Banner'
import { dataServiceGet } from '../service/api'
import styles from './styles'

const WIDTH = Dimensions.get('window').width;
const numColumns = WIDTH > 600 ? 3 : 2;



function Search() {


    const [input, setInput] = useState('')
    const [Loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])

    const fadeAnim = useRef(new Animated.Value(0)).current;

    function formatList(_dataList, numColumns) {
        const totalRows = Math.floor(_dataList.length / numColumns);
        let totalLastRow = _dataList.length - totalRows * numColumns;

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            _dataList.push({ key: 'blank', empty: true });
            totalLastRow++;
        }

        return _dataList;
    }

    const search = async () => {
        setLoading(true)

        await dataServiceGet({
            uri: `search/movie?api_key=bc51889d5e1c64d6502c03772e6f4adf&language=pt-BR&query=${input ? input : 'ata'}&page=1&include_adult=false`
        }).then((response) => {
            // console.log(response)
            setDatas(response.results)
            setLoading(false)
        }).finally(() => {
            setLoading(false)
        })


    }

    return (
        <>
            <ScrollView style={{ backgroundColor: '#252525', flex: 1 }}>

                <View style={styles.viewRow}>

                    <View
                        style={[
                            styles.fadingContainer,
                        ]}>
                        <TextInput
                            onChangeText={(value) => { setInput(value) }}
                            style={styles.fadingText} />
                    </View>
                    <TouchableOpacity onPress={search}>
                        <Ionicons name={'md-search'} size={30} color={'grey'} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.textTitle}>Título buscado "{input}"</Text>

                {Loading ?
                    <ActivityIndicator style={{ marginTop: 15 }} />
                    :
                    null
                }
                <FlatList

                    data={formatList(datas, numColumns)}
                    style={{ marginBottom: 40, marginHorizontal: 10 }}
                    // snapToAlignment={'center'}
                    numColumns={numColumns}
                    renderItem={({ item }) => <Banner {...item} />}
                    keyExtractor={(item, index) => index.toString()}
                // showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </>
    );
}


export default Search;