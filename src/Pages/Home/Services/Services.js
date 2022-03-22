import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-island-77490.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <p className='text-black text-4xl my-4'>Services</p>
            <div className='grid grid-cols-3 gap-12 m-12'>
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;