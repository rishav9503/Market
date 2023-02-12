import { Layout, Text } from "@ui-kitten/components"

import { StyleSheet } from "react-native";

const Circular = ({ name }) => {
    const capitaliseFirstLetter = (string) => string ? string.charAt(0).toUpperCase() : 'J'
    return (
        <Layout style={{backgroundColor:'#f3fce8'}}>
            <Layout style={styles.round}>
                <Text category="h4" status="primary">
                    {capitaliseFirstLetter(name)}
                </Text>
            </Layout>
            <Text style={{textAlign:'center'}} category="s1" status="primary">{name}</Text>
        </Layout>

    )
}


export default Circular;

const styles = StyleSheet.create({
    round: {
        backgroundColor: '#f3fce8',
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 14,
        borderColor: 'info',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})