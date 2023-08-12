import Tooltip from "../tooltip/Tooltip"

const homeCoinsData = [
    {
        name: "Bitcoin",
        img: "/images/bitcoin-btc-logo.svg"
    },
    {
        name: "Bnb",
        img: "/images/bnb-bnb-logo.svg"
    },
    {
        name: "Ethereum",
        img: "/images/ethereum-eth-logo.svg"
    },
    {
        name: "Tether",
        img: "/images/tether-usdt-logo.svg"
    },
    {
        name: "Usd-Coin",
        img: "/images/usd-coin-usdc-logo.svg"
    },
    {
        name: "Tron",
        img: "/images/tron-trx-logo.svg"
    }
]

const HomeCoins = () => {
    return (
        <>
            {homeCoinsData.map((item) => (
                <div key={item.name} className="group  relative w-10 h-10 mx-2 bg-slate-300 rounded-full p-2">
                    <Tooltip title={item.name} />
                    <img
                        className="w-full h-full"
                        src={item.img}
                        alt={item.name}
                    />
                </div>
            ))}
        </>
    )
}

export default HomeCoins