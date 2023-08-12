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
            >Crypto Currency, Blockchain, ICO, Web3 related website
                template crafted with Tailwind CSS. Comes with all essential
                UI components and pages to launch complete website or
                landing page for anything that related to Crypto,
                Blockchain and Web3.
            </p>
            <div className="flex mt-14 justify-center items-center">
                <HomeCoins />
            </div>
        </section>
    )
}

export default HomeLanding