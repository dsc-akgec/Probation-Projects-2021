import React from 'react'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../data/data'
import '../assets/css/ItemCard.css'

const ItemCard = () => {
    const { id } = useParams()
    return (
        <div style={{margin:40}}>
            {data.filter(item => item.id === id).map(item => (
                <div key={item.id}>
                    <img src={item.img} alt=" " className="item-img"/>
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                    <h4>{item.price}</h4>
                </div>
            ))}
            <Link to={'/cart'}><button className="btn btn-danger">Add to Cart</button></Link>
        </div>
    )
}

export default ItemCard
