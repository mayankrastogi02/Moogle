import React from 'react'
interface PillProps {
    text: string
}
const Pill = ({ text }: PillProps) => {
    return (
        <div className="rounded-full outline outline-[1px] outline-mgrey px-4 py-2 mx-1 hover:bg-[#f0f0f0]">{text}</div>
    )
}

export default Pill