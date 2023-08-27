import React from 'react'
interface PillProps {
    text: string
}
const Pill = ({ text }: PillProps) => {
    return (
        <div className="rounded-full border border-mgrey px-4 py-2 hover:bg-[#f0f0f0]">{text}</div>
    )
}

export default Pill