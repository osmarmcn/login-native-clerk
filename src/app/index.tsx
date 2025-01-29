
import {View, Text, StyleSheet} from 'react-native'
import { Button } from '../components/buttons'


export default function SignIn(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            <Button icon='logo-google' title='Entrar com google' />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000',
        padding:20
    },
    title:{
        fontSize: 30,
        color: '#fff',

    }
})