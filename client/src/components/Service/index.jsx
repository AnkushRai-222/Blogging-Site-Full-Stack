import React from 'react';
import styles from "./styles.module.css"


const LandingPage = () => {
  return (
    <div className={styles.all}>
      <section className={styles.section}>
      <div className={styles.row}>
        <h2 className='animate__heartBeat' id={styles.section_heading}>Our Services</h2>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
            <i className="fas fa-blog"></i>
            </div>
            <h3 className={styles.h3}>Create Blogs</h3>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            </div>
            <h3 className={styles.h3}>Earn Money With Blog</h3>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
            <i className="fa-solid fa-newspaper"></i>
            </div>
            <h3 className={styles.h3}>Read Blogs</h3>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
            <i className="fa-solid fa-share-from-square"></i>
            </div>
            <h3 className={styles.h3}>Share Blogs With Friend </h3>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
            <i className="fa-solid fa-user-group"></i>
            </div>
            <h3 className={styles.h3}>Refere & Earn</h3>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
            <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <h3 className={styles.h3}>Give Review On Blogs</h3>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default LandingPage;
