import React from 'react'

interface ResultProps {
    result: any
}

const Result = ({ result }: ResultProps) => {
    return (
        <div>
            <h1>{result.id}</h1>
        </div>

    )
}

export default Result