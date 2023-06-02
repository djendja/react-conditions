import React from 'react';


export default function PackingItem({name, isPacked}) {
    // if(isPacked) {
    //     return <li className="item">{name} ✔</li>; //null
    // }
    // return <li className="item">{name}</li>;

    let itemContent = name;
    if(isPacked) {
        itemContent = name + " ✔";
    }

    return <li className="item">{itemContent}</li>


    // messageCount > 0 && <p>New message</p>

    // return <li className="item">{isPacked ? `${name} ✔` : name}</li>
    // return <li className="item">{name}{isPacked && ' ✔'}</li>
}
  

