import React, { use, useEffect } from 'react'

const Test = async () => {
    await new Promise((resolve) => setTimeout(resolve, 50000));
    return (
        <div>test</div>
    )
}

export default Test