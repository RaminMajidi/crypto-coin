import { exchangesType } from '../../types/types'

const ExchangeItem = ({
    name,
    image,
    country,
    trust_score_rank,
    year_established,
    trade_volume_24h_btc
}: exchangesType) => {
    return (
        <>
            <td className="p-2">{trust_score_rank}</td>
            <td className=''>
                <div className="w-full h-full flex items-center justify-start ">
                    <img src={image} alt='' className="w-7 h-7 mx-4" />
                    <p>{name}</p>
                </div>
            </td>
            <td className="p-2 hidden sm:table-cell">{year_established}</td>
            <td className="p-2 hidden sm:table-cell">{country}</td>
            <td className='p-2'>{trade_volume_24h_btc.toFixed(6)}</td>
        </>
    )
}

export default ExchangeItem