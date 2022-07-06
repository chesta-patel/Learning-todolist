import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {
    const [show,setShow] = useState(false);
    return (
        <>
            <div className="main_heading">
                <p onClick={ () => setShow(!show)}>{show? "-" : "+" }</p>
                <h4>{question}</h4>
            </div>
            {
                show &&  <p className="answer">{answer}</p>
            }
           
        </>
    )
}

export default MyAccordion;