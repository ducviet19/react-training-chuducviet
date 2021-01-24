import React, { useState } from 'react';
function Count() {
    const [count, setCount] = useState(0);


    const countNumber = () => {
        setCount(count + 1)
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={countNumber}>+</button>
        </>
    )


}

export default Count;