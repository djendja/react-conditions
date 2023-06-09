import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const AccordionItem = (props) => {

  const { id, title, info } = props;

  const [isActive, setIsActive] = useState(false);

  const toggleItem = () => {
    setIsActive(!isActive);
  }

  return (
    <article key={id} className="m-accordion__item">
      <div className="m-accordion__header" onClick={toggleItem}>
        <h4 className="m-accordion__title">{title}</h4>
        <button className="m-accordion__btn">{isActive ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</button>
      </div>
      <p className={`m-accordion__info ${isActive && 'm-accordion__info--active'}`}>{info}</p>
    </article>
  )
}

export default AccordionItem