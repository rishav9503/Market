const { Button } = require("@ui-kitten/components")
import  { StyleSheet } from "react-native"

const PillButton=({title})=>{
    return(
        <Button style={styles.buttonStyleRound} size='tiny'>{title?title:''}</Button>
    )
}

const styles= StyleSheet.create({
    buttonStyleRound:{ 
        width:100,
        marginTop:10,
        backgroundColor:'#000000',
        borderRadius:20,
    }
})
export default  PillButton;