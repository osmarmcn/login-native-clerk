import { StyleSheet, Text, View } from "react-native";


export default function Home(){
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Home Screen</Text>

      </View>  
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:32,
        backgroundColor:'#000'
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})