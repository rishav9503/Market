import { Layout, Icon, Text } from "@ui-kitten/components"
import { StyleSheet } from "react-native";
const Header = ({title, rightComponent, leftComponent}) => {
    return (

        <Layout
            style={{  paddingLeft:20, justifyContent:'center' , backgroundColor:'#EAFBD6'}}
        >
           
            <Icon
                style={styles.icon}
                fill='#09590A'
                name='menu-2-outline'
            />
             <>
            <Text category="s1" status="basic" style={styles.title1}>Hello,</Text>
            <Text category="h6" status="basic" style={styles.title2}>Rishav</Text>
        </>

        </Layout>

    )
}
export default Header;
const styles = StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
    },
    title1: {
        color: '#8F9BB3',
        fontWeight: '300',
        marginTop: 20
    },
    title2: {
        color: '#111111',
        fontWeight: '500',
        fontSize:24
    },
  });