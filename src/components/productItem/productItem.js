import React from 'react';
import './styles.scss';

export default function ProductItem({img, title}) {
    return (
        <article className="product-list__item">
            <img className="product-item__img" src={img} alt="logos"/>
            <h2 className="product-item__title">{title}</h2>
        </article>
    )
}
