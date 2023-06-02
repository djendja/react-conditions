import React, { useState } from 'react'
import AccordionItem from './accordion-item/accordionItem';
import {accordionData} from './data'
import './styles.scss';

function Accordion() {
    const [items,setItems] = useState(accordionData)
    return (
        <section className="m-accordion">
            {
                items.map((el,i) => {
                    return<AccordionItem key={i} {...el} items={items} setItems={setItems}/>
                })
            }
        </section>
    )
}
export default Accordion