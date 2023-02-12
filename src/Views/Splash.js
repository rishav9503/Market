import React, { useEffect } from 'react'
import { Image } from 'react-native'
import Logo from '../Components/Logo'
import { Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const Splash = ({ navigation}) => {
    useEffect(()=>{
          const timeout =   setTimeout(()=>{
                navigation.navigate('Login')
            },1000)

            return ()=> clearTimeout(timeout)
    },
    
    [])
    return(
        <Layout
        style={{flex:1, justifyContent:'center', alignItems:'center'}}
        >
            <Logo height={350} resizeMode='center' />
            <Text category='h1'>MARKET</Text>
        </Layout>
    )

}
   
   



export default Splash;