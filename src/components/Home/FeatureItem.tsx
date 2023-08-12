import React from 'react'

type Props = {
    icon: string;
    title: string;
    desc: string;
}

const FeatureItem = ({ icon, title, desc }: Props) => {
    return (
        <div
            className='col-span-12 xs:col-span-6  sm:col-span-4 flex flex-col
              justify-center items-center text-center p-1'>

            <div className='w-20 h-20 bg-[var(--c-secondry)] flex 
            justify-center items-center rounded-full'>
                <i className={`bx ${icon} text-5xl`}></i>
            </div>

            <h4 className='text-3xl mt-4'>{title}</h4>

            <p className='p-2 mt-3 w-4/5'>{desc}</p>

        </div>
    )
}

export default FeatureItem