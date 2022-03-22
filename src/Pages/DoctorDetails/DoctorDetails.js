import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {

    const [doctor, setDoctor] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://peaceful-island-77490.herokuapp.com/doctors/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    const { name, img, specialist, experience } = doctor;
    return (
        <div>
            <img src={img}></img>
            <p>{name}</p>
            <p>{name} is one of the best {specialist} in Bangladesh and the Subcontinent. He has a long {experience} of experience in this field. He completed his MBBS from a renowned Medical College in Bangladesh with high- ranking result. He also qualified in FCPS, FRCP (Glasgow), FRCP (Edin), FACP (USA).</p>
            <p>{specialist}</p>
            <p>{experience}</p>

        </div>
    );
};

export default DoctorDetails;