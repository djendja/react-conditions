import React from 'react';
import Accordion from '../accordion/accordion';
import Header from '../header/header';
import PackingList from '../packing-list/packingList';
import ProductList from '../productList/productList';
import './styles.scss';


export default function Main() {
    return (
        <div className="main">
            <Header/>
            <ProductList/>
            <Accordion/>
            <PackingList />
        </div>
    )
}

  









//  <Poem /> 


// const poem = {
//     lines: [
//       'I write, erase, rewrite',
//       'Erase again, and then',
//       'A poppy blooms.'
//     ]
//   };
  
//   export function Poem() {
//     return (
//       <article>
//         {poem.lines.map((line, index) => {
//            return <Fragment key={index}>
//                     <p key={index}>
//                         {line}
//                     </p>
//                     {(index !== poem.lines.length - 1) && <hr/>}
//                  </Fragment>
//         }
//         )}
//       </article>
//     );
//   }