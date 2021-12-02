import React from 'react';
import Product from './Product';
import Cards from './Cards';
import './SeElements.css';
function SeElements(elem) {
    const filterProd = (ele) =>{
        return ele.heading===elem.name;
    }
    const Search = Product.filter(filterProd);
    return (
        <div className="searchRes">
            {Search.map((e)=>{return <Cards image={e.image}
                title={e.heading}
                description={e.about}
                price={e.price}
                id={e.id}
                key={e.id}/>})}
        </div>
    )
}

export default SeElements;
