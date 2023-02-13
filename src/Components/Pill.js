const { Button } = require("@ui-kitten/components")
import  { StyleSheet } from "react-native"

const PillButton=({title, active, onTap})=>{
    return(
        <Button status="info" appearance={active?'filled':'outline'} onPress={()=> onTap()} style={styles.buttonStyleRound} size='tiny' >{title?title:''}</Button>
    )
}

const styles= StyleSheet.create({
    buttonStyleRound:{ 
        width:80,
        margin:5,
        borderRadius:20,
    }
})
export default  PillButton;