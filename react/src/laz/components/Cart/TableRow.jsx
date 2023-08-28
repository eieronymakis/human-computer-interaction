import React from 'react'

function TableRow(props) {
  const {product_image, price, name} = props

  return (
    <td>
        <div className='img-info-cart'>
        <div className='image-cart'>
            <img src={product_image} alt={name} />
        </div>
        <div className='name-price-cart'>
            <span>{name}</span>
            <span>{price}€</span>
        </div>
        </div>
    </td>
  )
}

export default TableRow