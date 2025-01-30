

import * as secureStore from "expo-secure-store"

async function getToken(key:string) {
    try {
        return secureStore.getItem(key)

    }catch(error){
        throw error
    }
    
}

async function saveToken(key:string, value:string) {
    try {
        return secureStore.setItemAsync(key, value)

    }catch(error){
        throw error
    }
    
}

export const tokenCache = { getToken, saveToken}