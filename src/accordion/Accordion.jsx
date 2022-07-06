import React, { useState } from "react";
import { question } from "./api";
import MyAccordion from './MyAccordion';
import './accordion.css';

const Accordion = () => {
    const [data, setData] = useState(question);
    return (
        <>
            <section className="accordian_div">
            <h1>React interview question answer</h1>
                {
                    data.map((curElem) => {
                        const { id } = curElem;
                        return <MyAccordion key={id} {...curElem} />;
                    })
                }
            </section>
        </>
    )
}

export default Accordion;