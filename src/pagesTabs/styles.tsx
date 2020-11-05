import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    centeredView: {
        flex: 1,

        marginTop: 22
    },
    modalView: {
        flex: 0.9,
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        // padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: '80%',
        alignSelf: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    button: {

        marginHorizontal: 10,
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        top: 5
    },
    fadingContainer: {
        borderRadius: 10,
        width: '85%',
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        width: '100%',
        height: 25,
        fontSize: 18,
        // textAlign: "center",
        // margin: 5
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: "flex-end",
        marginTop: 20,
        paddingRight: 16
    }
});