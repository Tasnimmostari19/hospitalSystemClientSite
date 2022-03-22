import React from 'react';

const Service = ({ service }) => {
    const { name, description, about, appoinment, fee } = service;
    return (

        <div className='border-2 rounded-lg text-black bg-orange-300 py-8 hover:bg-gradient-to-r from-sky-300 to-orange-300'>
            <p className='text-xl'>{name}</p>
            <p>{description}</p>
        </div>


    );
};

export default Service;