import React from 'react'
import Navbar from '../../components/Navbar'
import HeroList from '../../components/Hero/HeroList'
import Cards  from '../../components/Cards/index'
import Service from "../../components/Service/index"
import Footer from '../../components/Footer'
import styles from "./styles.module.css"
function index() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
    <HeroList/>
    </div>
    <div>
      <h2 className='animate__heartBeat' id={styles.h2Tag}>Trending Blogs</h2>
       <Cards/>
    </div>
    <div>
     <Service/>,
    </div>
    <div>
    <Footer/>
    </div>
    
    </>
  )
}

export default index