import { ButtonGroup, Layout,Text } from '@ui-kitten/components';
import { useEffect, useMemo, useState } from 'react';
import { LineChart, CandlestickChart } from 'react-native-wagmi-charts';
import BaseComponent from '../Components/BaseComponent'
import PillButton from '../Components/Pill';
import axios from 'axios';
import { Dimensions } from 'react-native';

const ChartPage = ({ }) => {
  const [candleData, setCandleData] = useState([])
  const [timeInterval, setTimeInterval] = useState('7')
  const [timer, setTimer] = useState(null)

  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {
    const intervalId = setInterval(() => { 
       axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/ohlc', {
        params: {
          'vs_currency': 'usd',
          'days': timeInterval
        },
        headers: {
          'accept': 'application/json'
        }
      }).then((response)=>{
        let jsonData = []
        response.data.forEach((element, key) => {
          let data = {
            timestamp: element[0],
            open: element[1],
            high: element[2],
            low: element[3],
            close: element[4],
          }
          jsonData.push(data)
        });

        setCandleData(jsonData)
      }

      )
      
    }, 2000)


    return () => clearInterval(intervalId);


  }, [candleData3])

  const renderChart=()=> useMemo(()=>(<CandlestickChart.Provider data={candleData}>
  <CandlestickChart height={300} width={Dimensions.get('window').width - 40}>
    <CandlestickChart.Candles positiveColor='#7683FF' />
    <CandlestickChart.Crosshair>
      <CandlestickChart.Tooltip />
    </CandlestickChart.Crosshair>
  </CandlestickChart>
</CandlestickChart.Provider>),[candleData, timeInterval] )

  

  return (
    <Layout style={{ flex: 1, padding: 20 }}>
      <Text status='basic' category='h6' style={{fontWeight:'600'}}>Bitcoin</Text>
      {renderChart()}
      <Layout style={{flexDirection:'row'}}>
        <PillButton onTap={()=> setTimeInterval('7')} title='7 days' active={timeInterval==='7'}/>
        <PillButton onTap={()=> setTimeInterval('30')} title='30 days'  active={timeInterval==='30'}/>
        <PillButton onTap={()=> setTimeInterval('182')} title='6 months'  active={timeInterval==='182'}/>
        <PillButton onTap={()=> setTimeInterval('365')} title='1 year' active={timeInterval==='365'} />
      </Layout>
      
    </Layout>
  );
}
export default ChartPage;