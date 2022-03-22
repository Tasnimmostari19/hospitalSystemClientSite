import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, about, appoinment, fee, _id } = service;
    const navigate = useNavigate()

    const handleClick = id => {
        navigate(`/service/${id}`)
    }
    return (

        <div className='border-2 rounded-lg text-black bg-orange-300 py-8 hover:bg-gradient-to-r from-sky-300 to-orange-300' onClick={() => { handleClick(_id) }}>
            <p className='text-xl'>{name}</p>
            <p>{description}</p>
        </div>


    );
};

export default Service;