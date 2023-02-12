import { Layout, Text,  Icon, Button } from "@ui-kitten/components"
import {  StyleSheet } from 'react-native'
import { jobs, shadow } from "../constants/dummydata";
import PillButton from "../Components/Pill";
import Circular from "../Components/Circular";
import BaseComponent from "../Components/BaseComponent";
import { useMemo } from "react";

const Landing = ({ navigation, ...props}) => {

    const renderTitles = () => (
        <>
            <Text category="s1" status="basic" style={styles.title1}>Hello,</Text>
            <Text category="h6" status="basic" style={styles.title2}>Rishav</Text>
        </>
    )
    const rederJobCategories = () => useMemo(() => (
        <>
        <Text style={{marginTop:10,fontWeight:'300', fontSize:18, }}>Find your Job</Text>
         <Layout style={styles.jobCategory}>
            
            {jobs.map((item) => <Circular name={item.jobName} />)}
        </Layout>
        </>
       

    ), [jobs])

  

    const renderJobTypes=()=>{
        return(
            <>
            <Text style={{marginTop:10,fontWeight:'300', fontSize:18, }}>Job types</Text>
                <Layout style={styles.jobTypeContainer}>
                    <Layout style={styles.primary}>
                        <Icon name='home-outline' style={styles.homeIcon} />
                        <Text>WFH</Text>
                    </Layout>
                    <Layout style={styles.secondary}>
                        <Layout style={styles.top}>
                            <Icon name='briefcase-outline' style={styles.homeIcon} />
                            <Text>Full Time</Text>
                        </Layout>
                        <Layout style={styles.top}>
                            <Icon name='heart-outline' style={styles.homeIcon} />
                            <Text>Part Time</Text>
                        </Layout>
                    </Layout>
                </Layout>
            </>


        )
    }
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

    const renderLoginButtton = () => (
        <Button size="giant" accessoryRight={
            () => (
                <Icon name='chevron-right-outline' style={{ height: 50, width: 50 }} />)} >
            KNOW ABOUT CRYPTO
        </Button>
    )
      
    


    return (
        <BaseComponent>
            <Layout style={{flex:1, justifyContent:'space-between', backgroundColor:'#EAFBD6',}}>
                {renderTitles()}
                {renderBanner()}
                {renderJobTypes()}
                {rederJobCategories()}
                {/* {renderLoginButtton()} */}
               

            </Layout>
        </BaseComponent>

    )
}
export default Landing;
const styles = StyleSheet.create({
    card: {
        backgroundColor:'#f3fce8',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 15,
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
        marginBottom:5,
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
        height:64,
        width:64,
        marginLeft:10
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
    homeIcon:{
        width: 42,
        height: 42,
        borderRadius:19,
        padding:20
    },
    jobTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#EAFBD6'
    },
    primary: {
        height: 180, 
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: '47%',
        backgroundColor: '#D1F8AF',
        ...shadow
    },
    secondary: {
        width: '47%',
        justifyContent: 'space-between',
        backgroundColor: '#EAFBD6'
    },
    top: {
        borderRadius: 12,
        width: '100%',
        height: 85,
        backgroundColor: '#D1F8AF',
        justifyContent: 'center',
        alignItems: 'center',
        ...shadow
    },
   
})