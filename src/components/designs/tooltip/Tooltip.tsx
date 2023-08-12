import React from 'react'

type Props = {
    title: string;
}

const Tooltip = ({ title }: Props) => {
    return (
        <span
            className="hidden group-hover:block absolute -top-11 left-0 w-max
              bg-blue-700 text-slate-100 px-2 py-1 rounded-md 
                after:content-['>'] after:absolute after:text-blue-700
                after:-bottom-5 after:left-5 after:text-4xl after:font-bold  after:rotate-90 transition">
            {title}
        </span>
    )
}

export default Tooltip