import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"
import { Link } from 'react-router-dom'

const TeacherCards = ({wishList, setWishList}) => {
    const [teachers, setTeachers] = useState([])
    const [toggle, setToggle] = useState(true)
    const getData = async() => {
        let response = await axios.get("http://localhost:8080/student")
        setTeachers(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    const handleSearch = (e) => {
      axios.get("http://localhost:8080/student")
      .then((response) => {
       let searchedData = response.data.filter((elem) => elem.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setTeachers(searchedData)
      })
    }
    const handleSort = () => {
      setToggle(!toggle)
      if(toggle){
        let sortedName = teachers.sort((a, b) => a.name > b.name ? 1 : -1)
        setTeachers(sortedName)
      } else{
        getData()
      }
    }
    const handleAddWishList = (obj) => {
      if(!wishList.find((el) => el._id === obj._id)){
        setWishList([...wishList, obj])
      } else{
        window.alert("Add Already")
      }
    }
  return (
    <div className="TeacherCards">
    <div className="sort-search">
    <input className='search-input' type="text" placeholder='Search by Name' onChange={(e) => handleSearch(e)}/>
      <button className='search-btn' onClick={() => handleSort()}>Sort by Name</button>
    </div>
         <div className='teachers'>
       {teachers.map((element) => {
        return <div className="teacher">
            <Link to={`/home/${element._id}`}><img src={element.imgUrl} alt="" className='card-img'/></Link>
          <div className="card-text">
          <h4 className='card-h4'>{element.name}</h4>
            <h6 className='card-h6'>{element.title}</h6>
            <p className='card-p'>{element.description}</p>
            <button className={(wishList.find((elem) => elem._id === element._id)) ? "add" : "not-add"} onClick={() => handleAddWishList(element)}><i className="fa-solid fa-heart"></i></button>
          </div>
        </div>
       })}

    </div>
    </div>
  )
}

export default TeacherCards