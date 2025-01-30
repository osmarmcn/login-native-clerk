import { Button } from "@//components/buttons";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Image, StyleSheet, Text, View } from "react-native";


export default function Home(){

  const {user} = useUser()
  const {signOut} = useAuth()


    return (
      <View style={styles.container}>

        <Image source={{uri: user?.imageUrl}} style={styles.image}/>
        <Text style={styles.text}>Olá, {user?.fullName}!</Text>
        <Button icon="exit" title="sair" onPress={()=> signOut()}/> 

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
        color:'#fff',
        marginBottom:20
    },
    image:{
      width:100,
      height:100,
      borderRadius:50,
      marginBottom:20
  
    }
})