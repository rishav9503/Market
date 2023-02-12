import { Layout, Icon } from "@ui-kitten/components"
import { StyleSheet } from "react-native";
const Header = ({title, rightComponent, leftComponent}) => {
    return (

        <Layout
            style={{ height: 50, paddingLeft:20, justifyContent:'center' , backgroundColor:'#EAFBD6'}}
        >
            {leftComponent}
            <Icon
                style={styles.icon}
                fill='#09590A'
                name='menu-2-outline'
            />
            {rightComponent}
        </Layout>

    )
}
export default Header;
const styles = StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
    },
  });