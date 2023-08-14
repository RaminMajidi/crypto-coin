import { useState, useEffect } from "react"
import axios from "axios";
import { Alert } from "../../utils/alerts";
import { coinDataType } from "../../types/types";
import HistoryLoading from "./HistoryLoading";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);



type Props = {
    id: string
}

const HistoryChart = ({ id }: Props) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [coindata, setcoinData] = useState<coinDataType>();
    const [chartData, setChartData] = useState<any>(null);

    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
    useEffect(() => {

        const getData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (res.status === 200) {
                    const data = await res.data
                    setcoinData(data);
                }
                else {
                    Alert("warning", res.status.toString(), "warning")
                }
            } catch (error) {
                Alert("Error", "Request limit, try again in a few moments", "error")
            }
            finally {
                setLoading(false);
            }
        }
        getData();
    }, [])

    useEffect(() => {
       
            const chartdata =  coindata?.prices.map((value) => (
                { x: value[0], y: value[1].toFixed(2) }
            ))

            const data = {
                labels: chartdata?.map(value => moment(value.x).format("MMMDD")),
                datasets: [
                    {
                        fill: true,
                        label: id,
                        data: chartdata?.map(value => value.y),
                        borderColor: '#3e7dff',
                        backgroundColor: "#4f89ff"
                    }
                ]
            };
       
    
        setChartData(data);
    }, [coindata])


    const options = {
        responsive: true,
    };




    return (
        <>
            {
                loading ?
                    (
                        <HistoryLoading />
                    )
                    :
                    chartData ?
                        (
                            <div className="w-full h-[60dvh] mx-auto p-2 
                            flex justify-center items-center mt-20">
                                < Line
                                    options={options}
                                    data={chartData} />
                            </div >
                        )
                        :
                        (null)

            }
        </>

    )
}

export default HistoryChart