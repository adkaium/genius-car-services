import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id, name, img, description, price} =service;

    const nevigat = useNavigate()

    const handelTOserviceDetails = id =>{
        nevigat(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>THis is service:{name}</h2>
            <h5>PRICE: {price}</h5>
            <p><small>{description}</small></p>
            <button onClick={()=>handelTOserviceDetails(id)} className='btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;