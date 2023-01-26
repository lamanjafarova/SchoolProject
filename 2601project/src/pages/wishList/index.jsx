import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const WishList = ({wishList, setWishList}) => {
    const navigate = useNavigate()
    const handleRemove = (_id) => {
        let removedData = wishList.filter((a) => a._id !== _id)
        setWishList(removedData)
    }
  return (
    <div id='wishlist'>
        <div className="container">
            <div className="wish-list">
                {wishList.map((element) => {
                    return    <div className="card">
                    <img src={element.imgUrl} alt="" className='detail-img'/>
                    <h1 className='detail-h1'>{element.name}</h1>
                    <h5 className='detail-h5'>{element.title}</h5>
                    <p className='detail-p'>{element.description}</p>
                    <div className="btn">
                    <button className='back-btn' onClick={() => navigate("/")}>Go Back </button>
                    <button className='remove-btn' onClick={() => handleRemove(element._id)}>Remove</button>
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default WishList