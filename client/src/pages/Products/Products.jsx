import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(false);

  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <input type="checkbox" value={1} id="1" />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="input-item">
            <input type="checkbox" value={2} id="2" />
            <label htmlFor='2'>Skirt</label>
          </div>
          <div className="input-item">
            <input type="checkbox" value={3} id="3" />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter By Price</h2>
          <div className="input-item">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={e => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort By</h2>
          <div className="input-item">
            <input type="radio" name="price" value="asc" id="asc" onChange={e => setSort("asc")} />
            <label htmlFor='asc'>Price (Lowest First)</label>
          </div>
          <div className="input-item">
            <input type="radio" name="price" value="desc" id="desc" onChange={e => setSort("desc")} />
            <label htmlFor='desc'>Price (Heighest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='category-img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products