import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import Banner from '../components/Banner';
import { useNavigation, useRoute } from '@react-navigation/native'
import { genres } from '../helpers/genres'
import { dataServiceGet } from '../service/api';
import styles from './styles';
const numColumns = 2

function CategoryLIst() {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [dataList, setDataLIst] = useState([])


    async function listCategory(id) {

        await dataServiceGet({
            uri: `discover/movie?api_key=bc51889d5e1c64d6502c03772e6f4adf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        }).then((response) => {
            setModalVisible(true)
            setDataLIst(response.results)
        }).catch(() => {
            console.log("error")
        })

    }


    function formatList(_dataList, numColumns) {
        const totalRows = Math.floor(_dataList.length / numColumns);
        let totalLastRow = _dataList.length - totalRows * numColumns;

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            _dataList.push({ key: 'blank', empty: true });
            totalLastRow++;
        }

        return _dataList;
    }


    return (


        <View style={{ flex: 1, backgroundColor: "#252525" }}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={{ ...styles.openButton, marginTop: 10, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>
                                Fechar
                                    </Text>
                        </TouchableHighlight>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={formatList(dataList, numColumns)}
                            // pagingEnabled
                            // decelerationRate={0}
                            style={{ marginBottom: 10, marginHorizontal: 10 }}
                            // snapToAlignment={'center'}
                            numColumns={numColumns}


                            renderItem={({ item }) =>

                                <TouchableOpacity


                                    onPress={() => {
                                        setModalVisible(false)
                                        navigation.navigate('Details', {
                                            item: item,
                                            poster_path: `https://image.tmdb.org/t/p/original${item.poster_path}`
                                        })
                                    }}

                                    style={[styles.button, { width: '50%', }]}>
                                    <Image style={{ width: 140, height: 200, }} source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} />
                                    <Text style={styles.text}>{item.title || item.original_title || item.original_name}</Text>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                    </View>
                </View>
            </Modal>

            <FlatList
                style={{ marginBottom: 20, marginTop: 25, }}
                data={genres}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ width: "95%", height: 50, marginTop: 15, alignSelf: "center", borderRadius: 1, borderWidth: 1, borderColor: "grey" }}
                        onPress={() => {
                            listCategory(item.id)

                        }}>
                        <Text style={{ color: 'white', fontWeight: "bold", padding: 5, fontSize: 28, textAlign: 'center' }}>
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </View>
    )

        ;
}

export default CategoryLIst;


