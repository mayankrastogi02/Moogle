import React from 'react'
interface PillProps {
    text: string
}
const Pill = ({ text }: PillProps) => {
    return (
        <div className="badge badge-outline border-2 p-4 hover:bg-[#f0f0f0]">{text}</div>
    )
}

export default Pill