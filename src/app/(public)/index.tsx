
import {View, Text, StyleSheet} from 'react-native'
import { Button } from '../../components/buttons'
import  * as WebBrowser from 'expo-web-browser'
import * as Liking from 'expo-linking'
import { useEffect, useState } from 'react'
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn(){
    const [isLoading, setLoading] = useState(false)

    const googleOauth = useOAuth({strategy:'oauth_google'})

    async function onGoogleSignIn(){
        try {
            setLoading(true)

            const redirectUrl = Liking.createURL('/')
            const oAuthFlow = await googleOauth.startOAuthFlow({redirectUrl})

            if(oAuthFlow.authSessionResult?.type === 'success'){
                if(oAuthFlow.setActive){
                    await oAuthFlow.setActive({session:oAuthFlow.createdSessionId})
                }
            }else{
                setLoading(false)
            }

        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        WebBrowser.warmUpAsync()

        return () =>{
            WebBrowser.coolDownAsync()
        }
    },[])



    return (



        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            <Button icon='logo-google' title='Entrar com google' 
                onPress={onGoogleSignIn} 
                isLoading={isLoading}
            
            
            />

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