import React from 'react'
import "./index.scss"
import Teacher from "../../images/teacher.svg"
import Teaching from "../../images/teaching.svg"
import Youtube from "../../images/youtube.svg"
import TeacherCards from '../../components/cards'
const HomePage = ({wishList, setWishList}) => {
  return (
    <div id='home'>
        <div className="homepage">
            <div className="container">
               <div className="text-form">
               <div className="text">
                    <h2 className='home-text-h2'>Learn From The Expert</h2>
                    <p className='home-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <button className='home-btn'>ADMISSION NOW</button>
                </div>
                <div className="form-home">
                    <h4 className='home-form-h4'>Sign Up</h4>
                    <input className='home-form-input' type="text" placeholder='Email Adress' />
                    <input className='home-form-input' type="text" placeholder='Password'/>
                    <input className='home-form-input' type="text" placeholder='Re-type Password'/>
                    <button className='home-form-btn'>Sign Up</button>
                </div>
               </div>
               <div className="ourPrograms">
                <h1 className='program-h1'>Our Programs</h1>
                <p className='program-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                <div className="programs">
                    <div className="program">
                        <div className="image">
                            <img src={Youtube} alt="" className='img'/>
                        </div>
                        <div className="program-text">
                            <h4 className='program-text-h4'>We Are Excellent In Education</h4>
                            <p className='program-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                            <div className="icons">
                                <span className='icon'><i className="fa-solid fa-graduation-cap"></i></span>22,931 Yearly Graduates
                            </div>
                            <div className="icons">
                                <span className='icon'><i className="fa-solid fa-building-columns"></i></span>22,931 Yearly Graduates
                            </div>
                        </div>
                    </div>
                    <div className="program">
                        <div className="program-text">
                            <h4 className='program-text-h4'>Strive for Excellent</h4>
                            <p className='program-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                            <div className="icons">
                                <span className='icon'><i className="fa-solid fa-graduation-cap"></i></span>22,931 Yearly Graduates
                            </div>
                            <div className="icons">
                                <span className='icon'><i className="fa-solid fa-building-columns"></i></span>22,931 Yearly Graduates
                            </div>
                        </div>
                        <div className="image">
                            <img src={Teaching} alt="" className='img'/>
                        </div>
                    </div>
                    <div className="program">
                        <div className="image">
                            <img src={Teacher} alt="" className='img'/>
                        </div>
                        <div className="program-text">
                            <h4 className='program-text-h4'>Education is life</h4>
                            <p className='program-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                            <div className="icons">
                                <span className='icon'><i className="fa-solid fa-graduation-cap"></i></span>22,931 Yearly Graduates
                            </div>
                            <div className="icons">
                                <span className='icon'><i className="fa-solid fa-building-columns"></i></span>22,931 Yearly Graduates
                            </div>
                        </div>
                    </div>
                </div>
               </div>
               <div className="ourTeachers">
                <h1 className='teacher-h1'>Our Teachers</h1>
                <p className='teacher-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                <TeacherCards wishList={wishList} setWishList={setWishList} />
               </div>
               <div className="footer">
                <p className='footer-p'>Copyright ©2023 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <span className='span'>Colorlib</span></p>
               </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage