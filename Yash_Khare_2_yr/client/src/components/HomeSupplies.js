import React from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom'

function createCard(item) {
    return (
        <div >
            <div className="home-carousel">
                <img src=""alt=""/>
            </div>
            <div className="card">
                <img src={item.img} alt="" className="home-img"/>
                <div className="card-content">
                    <h5>{item.name}</h5>
                </div>
                <span><button className="btn btn-danger" >Add to Cart</button>&nbsp;<Link to={`/item/${item.id}`}><button className="btn btn-success">View</button></Link></span>
            </div> 
        </div>
    )
}
const HomeSupplies = () => {
    return (
        <div>
            {data.filter(item => item.type === "home").map(createCard)}
        </div>
    )
}

export default HomeSupplies
