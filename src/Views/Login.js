import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import { Button, Input, Layout } from '@ui-kitten/components'
import Logo from '../Components/Logo'
import * as Keychain from "react-native-keychain";

const Login=({navigation}) =>{
    const [userName, setUserName]= useState('')
    const [password, setPassword]= useState('')


    const handleLogin = async () => {
        // const token =
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        // await Keychain.setGenericPassword(userName, token);
        // setUserDetails({password, userName });
        navigation.navigate('Home')
      };
    

    const handleOnNuserNameChane=(text) =>{
       setUserName(text)
    }

    const handleChangePassword=(text) =>{
        setPassword(text)
    }
    const renderUserField=() =>{
        return (
            <Input
                label={'User Name'}
                style={styles.TextInput}
                placeholder="rishav9503"
                onChangeText={handleOnNuserNameChane}
            />
        )
    }

    const renderPasswordField=()=>{
        return (
            <Input
                label={'Password'}
                style={styles.TextInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text)=> handleChangePassword(text)}
            />
        )
    }
    const renderLoginButtton=()=> {
        return (
            <Button onPress={()=>handleLogin()} disabled={disabled} style={styles.loginBtn} status='primary' variants='gaint'>
              {'LOGIN'}
            </Button>
        )
    }
    const renderLogo=() =>{
        return (
            <Logo height={120} resizeMode={'contain'} />
        )
    }

    
    const disabled = password === '' || userName === ''

    return (

        <Layout style={styles.container}>
            {renderLogo()}
            {renderUserField()}
            {renderPasswordField()}
            {renderLoginButtton()}
          
        </Layout>

        
    )
}




export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#EAFBD6',
        alignItems: "center",
        flex: 1
    },
    TextInput: {
        height: 50,
        marginVertical: 20,
        width: '80%'

    },
    loginBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    loginText: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 1
    },
    image: {
        margin: 45,
        height: 120,
        resizeMode: 'contain'
    }
})
