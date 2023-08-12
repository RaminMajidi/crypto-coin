import FeatureItem from "./FeatureItem"

const FeatureData = [
    {
        icon: "bx-shield-quarter",
        title: "Safe & Secure",
        desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor ."
    },
    {
        icon: "bx-gift",
        title: "Early Bonus",
        desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor ."
    },
    {
        icon: "bxs-shapes",
        title: "Universal Access",
        desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor ."
    },
    {
        icon: "bxs-layout",
        title: "Secure Storage",
        desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor ."
    },
    {
        icon: "bxs-wallet",
        title: "Low Cost",
        desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor ."
    },
    {
        icon: "bx-line-chart",
        title: "Several Profit",
        desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor ."
    }
]


const CryptoFeaures = () => {
    return (
        <section className='py-16'>
            <article className='text-center'>
                <h5 className='uppercase  text-lg
                 md:text-2xl text-[var(--c-secondry)] p-1'
                >CRYPTO FEATURE</h5>

                <h3 className='text-2xl md:text-5xl p-1'>
                    Best Features
                </h3>
                <p className='w-4/5 sm:w-2/5 text-base sm:text-xl mx-auto px-2 py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc sed congue arcu, In et dignissim quam
                    condimentum vel.
                </p>

            </article>

            <article className="grid grid-cols-12 gap-6 mt-12 p-2">
                {FeatureData.map((item) => (
                    <FeatureItem
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </article>


        </section>
    )
}

export default CryptoFeaures