import React from 'react';
import man from '../../../image/pexels-andrea-piacquadio-3778876.jpg';
import woman from '../../../image/pexels-pixabay-38554.jpg'

const Review = () => {
    return (
        <div>
            <p className='text-black text-4xl my-4'>Reviews</p>
            <div className='flex items-center justify-center m-12'>

                <div className='flex flex-col flex-initial justify-center border-2 rounded-lg text-black mr-60' style={{ width: '400px' }}>
                    <img className='mb-8 mx-12' src={woman} style={{ width: '300px', height: '400px' }}></img>
                    <p className='text-2xl'>Anastasia</p>
                    <p className='my-4'>It's very well mannered staff good coordination with patients. Mrs. Praveena garu assisted very well and taken good care towards patients. Overall experience is satisfactory.</p>
                </div>
                <div className='flex flex-col flex-initial justify-center border-2 rounded-lg text-black' style={{ width: '400px' }}>
                    <img className='mb-8 mx-12' src={man} style={{ width: '300px', height: '400px' }}></img>
                    <p className='text-2xl'>Benjamin</p>
                    <p className='my-4'>Recently visited health check up department of Hospital for a whole body check up. The entire process from check in to the end was seamless. The staff at the health check department was courteous, helpful and very attentive. I would highly recommend this hospital to anyone looking for something similar services.</p>
                </div>

            </div>
        </div>
    );
};

export default Review;