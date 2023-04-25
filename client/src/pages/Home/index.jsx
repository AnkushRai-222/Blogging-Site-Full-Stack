import React from 'react'
import Navbar from '../../components/Navbar'
import HeroList from '../../components/Hero/HeroList'
import Cards  from '../../components/Cards/index'
import Service from "../../components/Service/index"
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
      <h2 className={styles.h2Tag}>Trending Blogs</h2>
       <Cards/>
    </div>
    <div>
    <h2 className={styles.h2Tag}>Our Services</h2>
     <Service/>
    </div>
    </>
  )
}

export default index