import React from 'react'
import styles from "./styles.module.css"
function HeroList() {
  return (
    <div>
          <section className={styles.hero}>
        <h1 className='animate__heartBeat'>Welcome to our website</h1>
        <p className='animate__heartBeat'>We offer the best Blogs for you!</p>
        <a href="/" className={styles.my_button}>Learn More</a>
      </section>
    </div>
  )
}

export default HeroList