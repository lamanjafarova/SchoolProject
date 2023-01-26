import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"

const DetailsPage = () => {
    const [detailData, setDetailData] = useState([])
    const { _id } = useParams()
    const getData = async() => {
        let response = await axios.get(`http://localhost:8080/student/${_id}`)
        setDetailData(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8080/student/${_id}`)
        navigate("/")
    }
  return (
    <div id='detail'>
           <Helmet>
            <meta charSet="utf-8" />
            <title>{detailData.name}</title>
            <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="container">
            <div className="detail">
                <div className="card">
                    <img src={detailData.imgUrl} alt="" className='detail-img'/>
                    <h1 className='detail-h1'>{detailData.name}</h1>
                    <h5 className='detail-h5'>{detailData.title}</h5>
                    <p className='detail-p'>{detailData.description}</p>
                    <div className="btn">
                    <button className='back-btn' onClick={() => navigate("/")}>Go Back </button>
                    <button className='del-btn' onClick={() => handleDelete(detailData._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage