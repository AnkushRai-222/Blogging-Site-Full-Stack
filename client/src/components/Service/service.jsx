import React from 'react';
import styles from './styles.module.css';

const Service = ({ title, description }) => {
  return (
    <div className={styles.service}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ServiceList = ({ services }) => {
  return (
    <div className={styles.service_list}>
      {services.map((service) => (
        <Service key={service.title} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default ServiceList;
