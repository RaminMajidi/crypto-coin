import HomeCoins from '../Home/HomeCoins'

const HomeLanding = () => {
    return (
        <section className="flex flex-col justify-center
        h-[90dvh] bg-[url(/images/hero-shape-2.svg)] 
        bg-cover bg-no-repeat">
            <h1 className="uppercase text-center py-3 px-1 text-3xl md:text-6xl">
                welcome To Crypto Coin
            </h1>
            <p
                className="text-base md:text-xl w-2/3 md:w-2/4 mx-auto
           mt-10 px-3 text-center"
            >Crypto Currency,Our website is a platform for you to
                familiarize yourself with the topics of digital currencies
                and top exchanges in the world. This website is always
                improving the service for you
            </p>
            <div className="flex mt-14 justify-center items-center">
                <HomeCoins />
            </div>
        </section>
    )
}

export default HomeLanding