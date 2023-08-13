import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export const data = {
    labels: ['Financial Overhead', 'Bonus & found', 'it infastrueture', 'Gift Code Inventory'],
    datasets: [
        {
            label: '# of Votes',
            data: [39.2, 29.6, 20.4, 10.8,],
            backgroundColor: [
                '#93c5fd',
                '#163287',
                '#3363ff',
                '#8ba6ff',
            ],
            borderColor: [
                '#93c5fd',
                '#1e3a8a',
                '#1d4ed8',
                '#3b82f6',
            ],
            borderWidth: 1,
        },
    ],
};


const TokenSale = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <section className="bg-glass w-[94%] mx-auto my-8 rounded-lg
        grid grid-cols-12 gap-3 py-12 px-6">
            <article className="col-span-12 sm:col-span-6 flex justify-center items-center">
                <div className='w-4/5 sm:w-3/5 h-full  m-auto'>
                    <Pie data={data} />
                </div>
            </article>

            <article className="col-span-12 sm:col-span-6">
                <h5 className="text-xl text-[var(--c-secondry)]">
                    TOKEN
                </h5>
                <h3 className="text-5xl my-2">
                    Token Sale
                </h3>
                <p className="text-lg p-1 my-3">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Phasellus condimentum tellus
                    at lectus pulvinar, id auctor
                    felis iaculis. In vestibulum
                    neque sem, at dapibus justo
                    facilisis in.
                </p>
                <div>
                    {data?.labels.map((item, i) => {
                        return (
                            <div key={i} className="flex justify-start items-center">
                                <div
                                    style={{ backgroundColor: `${data.datasets[0].backgroundColor[i]}` }}
                                    className={`w-7 h-7 rounded-full my-2 border`}>
                                </div>
                                <p className="ml-3 text-lg">{data.datasets[0].data[i]}<span>%</span> {item}</p>
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default TokenSale