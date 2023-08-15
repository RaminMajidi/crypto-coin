import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Alert } from "../utils/alerts"
import TableExchanges from "../components/Exchanges/TableExchanges"
import TableLoader from "../components/Coins/TableLoader"
import { NavContext } from "../context/NavActiveContext"
import NotItem from "../components/designs/notItem/NotItem"


const Exchanges = () => {
    const { setNavActive } = useContext(NavContext)

    const [loading, setLoading] = useState(false);
    const [exchanges, setExchanges] = useState<[]>([])

    const url = `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1`
    useEffect(() => {
        setNavActive("exchanges")
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
                    setExchanges(data);
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
                exchanges.length ?
                    (<TableExchanges
                        data={exchanges} />)
                    :
                    (
                        <NotItem />
                    )
            }
        </section>
    )
}

export default Exchanges