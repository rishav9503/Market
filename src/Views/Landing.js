import { Layout, Text, Card, Icon } from "@ui-kitten/components"
import { Button, StyleSheet } from 'react-native'
import { jobs } from "../constants/dummydata";
import PillButton from "../Components/Pill";
import Circular from "../Components/Circular";
import BaseComponent from "../Components/BaseComponent";
import { useMemo } from "react";

const Landing = () => {

    const renderTitles = () => (
        <>
            <Text category="s1" status="basic" style={styles.title1}>Hello,</Text>
            <Text category="h6" status="basic" style={styles.title2}>Rishav</Text>
        </>
    )
    const rederJobCategories = () => useMemo(() => (
        <>
        <Text style={{marginTop:20, marginBottom:5}}>Search by categories</Text>
         <Layout style={styles.jobCategory}>
            
            {jobs.map((item) => <Circular name={item.jobName} />)}
        </Layout>
        </>
       

    ), [jobs])

    // const RightIcon = () => (
       
    //   );

    const renderBanner = () => (
        <Layout style={styles.card}  >
            <Layout style={{ justifyContent: 'center', backgroundColor:'#f3fce8' }}>
                <Text category="h3" status="warning">
                    50% off
                    <Icon style={styles.icon}
                        fill='#FFC802'
                        name='pricetags-outline' />
                </Text>
                <Text status="basic">On premium membership.</Text>
            </Layout>
            <Icon name='chevron-right-outline' style={{ height: 100, width: 100 }} />
        </Layout>
    )


    return (
        <BaseComponent>
            <>
                {renderTitles()}
                {renderBanner()}
                {rederJobCategories()}
               

            </>
        </BaseComponent>

    )
}
export default Landing;
const styles = StyleSheet.create({
    card: {
        backgroundColor:'#f3fce8',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 8,

    },
    jobCategory: {
        backgroundColor:'#f3fce8',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        borderRadius: 12,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    icon:{
        height:24,
        width:24,
        marginLeft:10
    },
    title1:{color:'#8F9BB3', fontWeight:'400', marginTop:20},
    title2:{color:'#111111', fontWeight:'600'}
})