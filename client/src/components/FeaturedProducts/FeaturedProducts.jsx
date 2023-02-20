import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'


const FeaturedProducts = (props) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Hat",
            oldPrice: 19,
            price: 12
        },
    ]
    return (
        <div className="featured-products">
            <div className="top">
                <h1>{props.type} Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus iure excepturi harum, sed ab odio rerum saepe. Harum iure pariatur minima corporis officia natus laborum consequuntur ducimus commodi! Veniam?</p>
            </div>
            <div className="bottom">
                {
                    data.map(item => (
                        <Card item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts