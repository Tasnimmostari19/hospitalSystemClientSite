import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://peaceful-island-77490.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { name, description, about, appoinment, fee } = service;
    return (
        <div className='w-1/2 text-center'>
            <p className='text-3xl'>{name}</p>
            <p className='text-center'><span className='text-xl'>Description:</span>{description}</p>
            <p><span className='text-xl'>About:</span>{about}</p>
            <p><span className='text-xl'>Appointment: </span>{appoinment}</p>
            <p><span className='text-xl'>Fee: </span>{fee}</p>

        </div>
    );
};

export default ServiceDetails;