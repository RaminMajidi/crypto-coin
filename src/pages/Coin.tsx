import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Alert } from "../utils/alerts"
import HistoryChart from "../components/Coins/HistoryChart"


type coinData = {
  id: string;
  image: string;
  name: string;
  description: string;
}

const Coin = () => {

  const { coinId } = useParams()
  const [coin, setCoin] = useState<coinData>()
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
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
          const newData: coinData = await {
            id: data.id,
            image: data.image.small,
            name: data.name,
            description: data.description.en
          }
          setCoin(newData);
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
    <>
      {
        coin ? (
          <section className="max-w-5xl mx-auto">
            <HistoryChart id={coin.id} />
            <div className=" bg-glass px-8 py-4 mt-20 mb-4 rounded-xl">
              <img
                className="rounded-full w-12 h-12 bg-slate-50"
                src={coin.image} />
              <h2 className="text-[var(--c-secondry)] text-2xl">
                {coin.name}
              </h2>
              <p
                className="[&>a]:text-blue-600 [&>a]:underline text-justify"
                dangerouslySetInnerHTML={{ __html: coin.description }}></p>
            </div>
          </section >
        ) : (
          <h3 className="text-center text-red-600 text-2xl">not found</h3>
        )
      }
    </>
  )
}

export default Coin