import CoinItem from './CoinItem'
import { coinType } from "../../types/types"
import { Link } from 'react-router-dom'

type Props = {
    data: coinType[];
}

const CoinsTable = ({ data }: Props) => {
    return (
        <>
            <div className='mt-20 mb-5 mx-auto
         rounded-lg bg-glass p-2 w-[90%]'>
                <table className=' w-full text-center'>
                    <thead className='border-b-2 mb-2'>
                        <th className='p-2'>#</th>
                        <th className='p-2'>Coin</th>
                        <th className='p-2'>Price</th>
                        <th className='p-2'>24h</th>
                        <th className='p-2 hidden sm:table-cell'>Volume</th>
                        <th className='p-2 hidden sm:table-cell'>Mkt Cap</th>
                    </thead>
                    <tbody>
                        {data.map(coins => {
                            return (
                                <tr key={coins.id} className='relative
                             hover:bg-[var(--c-secondry)]
                              transition'>

                                    <CoinItem
                                        current_price={coins.current_price}
                                        image={coins.image}
                                        market_cap={coins.market_cap}
                                        market_cap_rank={coins.market_cap_rank}
                                        price_change_percentage_24h={coins.price_change_percentage_24h}
                                        symbol={coins.symbol}
                                        total_volume={coins.total_volume}
                                        key={coins.id}
                                    />

                                    <Link
                                        title={coins.name}
                                        className='absolute top-0 left-0 w-full h-full'
                                        to={`/coins/${coins.id}`}
                                        key={coins.id}>
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

export default CoinsTable