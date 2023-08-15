import { Link } from "react-router-dom";
import { exchangesType } from "../../types/types"
import ExchangeItem from "./ExchangeItem";

type Props = {
    data: exchangesType[];
}

const TableExchanges = ({ data }: Props) => {
    return (
        <>
            <div className='mt-20 mb-5 mx-auto
                rounded-lg bg-glass p-2 w-[90%]'>
                <table className=' w-full text-center'>
                    <thead className='border-b-2 mb-2'>
                        <th className='p-2'>Rank</th>
                        <th className='p-2'>Name</th>
                        <th className='p-2 hidden sm:table-cell'>Established</th>
                        <th className='p-2 hidden sm:table-cell'>Country</th>
                        <th className='p-2'>Trade Volume 24h btc</th>
                    </thead>
                    <tbody>
                        {data.map(exchange => {
                            return (
                                <tr key={exchange.id} className='relative
                         hover:bg-[var(--c-secondry)]
                          transition'>
                                    <ExchangeItem
                                        country={exchange.country}
                                        image={exchange.image}
                                        name={exchange.name}
                                        trade_volume_24h_btc={exchange.trade_volume_24h_btc}
                                        trust_score_rank={exchange.trust_score_rank}
                                        url={exchange.url}
                                        year_established={exchange.year_established}
                                        key={exchange.id}
                                        id={exchange.id}
                                    />
                                    <Link
                                        target="_blank"
                                        title={exchange.name}
                                        className='absolute top-0 left-0 w-full h-full'
                                        to={exchange.url}
                                        key={exchange.id}>
                                    </Link>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableExchanges