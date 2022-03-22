import React, { useEffect, useState } from 'react';
import Doctor from '../../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://peaceful-island-77490.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])


    return (
        <div>
            <p className='text-black text-4xl my-4'>Doctors</p>
            <div className='grid grid-cols-4 gap-8 m-12'>
                {
                    doctors.map(doctor => <Doctor
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;