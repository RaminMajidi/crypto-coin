import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Alert } from "../utils/alerts"
import CoinsTable from "../components/Coins/Coins"
import TableLoader from "../components/Coins/TableLoader"
import { NavContext } from "../context/NavActiveContext"
import NotItem from "../components/designs/notItem/NotItem"

const Coins = () => {

    const { setNavActive } = useContext(NavContext)
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState<[]>([])

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    useEffect(() => {
        setNavActive("coins")
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
                    setCoins(data);
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

    return (
        <section className="">
            {loading ?
                (
                    <TableLoader />
                ) :
                coins.length ?
                    (<CoinsTable
                        data={coins} />)
                    :
                    (
                        <NotItem />
                    )
            }
        </section>
    )
}

export default Coins