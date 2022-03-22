import React from 'react';
import { useNavigate } from 'react-router-dom';


const Doctor = ({ doctor }) => {
    let navigate = useNavigate();
    const { name, img, specialist, _id } = doctor;
    const handleClick = id => {
        navigate(`/doctor/${id}`)
        console.log('shss');
    }

    return (
        <div className='border-2 rounded-lg text-black bg-sky-300 hover:bg-orange-300' onClick={() => { handleClick(_id) }}>
            <img src={img}></img>
            <p className='text-xl my-12'>{name}</p>
            <p className='mb-8'>{specialist}</p>
        </div>
    );
};

export default Doctor;