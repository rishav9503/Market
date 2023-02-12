
import {Image } from 'react-native'

const Logo= ({height, resizeMode}) =>{
    return (
        <Image style={[{margin:45, height:height, resizeMode:resizeMode}]} source={require("../../assets/leaf.png")} />
    )
}


export default Logo;