
type Props = {
    market_cap_rank: number,
    image: string,
    symbol: string,
    current_price: number,
    price_change_percentage_24h: number,
    total_volume: number,
    market_cap: number,
}

const CoinItem = ({
    market_cap_rank,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    market_cap,
}: Props) => {
    return (
        <>
            <td className="p-2">{market_cap_rank}</td>
            <td className=''>
                <div className="w-full h-full flex items-center justify-start ">
                    <img src={image} alt='' className="w-7 h-7 mx-4" />
                    <p>{symbol.toUpperCase()}</p>
                </div>
            </td>
            <td className="p-2">${current_price.toLocaleString()}</td>
            <td className="p-2">{price_change_percentage_24h.toFixed(2)}%</td>
            <td className='p-2 hidden sm:table-cell'>${total_volume.toLocaleString()}</td>
            <td className='p-2 hidden sm:table-cell'>${market_cap.toLocaleString()}</td>
        </>
    )
}

export default CoinItem