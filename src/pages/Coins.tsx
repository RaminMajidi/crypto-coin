import { useState, useEffect } from "react"
import axios from "axios"
import { Alert } from "../utils/alerts"
import { Link } from "react-router-dom"
import CoinsTable from "../components/Coins/Coins"


type Props = {}

const Coins = (props: Props) => {

    const [coins, setCoins] = useState<[]>([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<number>(1)


    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`

    useEffect(() => {

        const getData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(url);
                console.log(res);
                if (res.status === 200) {
                    const data = await res.data
                    console.log(data);
                    setCoins(data);
                }
                else {
                    Alert("warning", res.status.toString(), "warning")
                }
            } catch (error) {
                Alert("Error", "An error occurred", "error")
            }
            finally {
                setLoading(false);
            }
        }
        getData();
    }, [])

    return (
        <section className="">
            <CoinsTable data={coins} />
        </section>
    )
}

export default Coins