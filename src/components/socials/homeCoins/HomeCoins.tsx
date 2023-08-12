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
                <div className="group  relative w-10 h-10 mx-2 bg-slate-300 rounded-full p-2">
                    <span
                        className="hidden group-hover:block absolute -top-11 left-0 w-max
                         bg-blue-700 text-slate-100 px-2 py-1 rounded-xl 
                         after:content-['>'] after:absolute after:text-blue-700
                          after:-bottom-5 after:left-5 after:text-4xl  after:rotate-90 ">
                        {item.name}
                    </span>
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