
import React from 'react';
function Machine(props) {

    const{a,b , c } = props

    const winner = (a === b) && (b === c);


    return(
        <div>
            <p>{a} {b} {c}</p>
            <p>{ winner ? "Winner" : "Lose" }</p>
        </div>
       
    )
}

export default Machine;