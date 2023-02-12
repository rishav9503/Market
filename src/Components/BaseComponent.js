
import { Layout } from "@ui-kitten/components"
import Header from './Header'
const BaseComponent=({children, })=>{


    return(
        <Layout style={{flex:1,backgroundColor:'#EAFBD6' }}>
                <Header />
                <Layout style={{flex:1,backgroundColor:'#EAFBD6',  paddingHorizontal:15}} >
                {children}
                </Layout>
               
        </Layout>
    )
}
export default BaseComponent;