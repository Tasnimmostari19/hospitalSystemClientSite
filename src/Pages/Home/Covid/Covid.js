import React from 'react';
import img from '../../../image/Post-FB-7-e1622519655759.png'

const Covid = () => {
    return (
        <div className='grid grid-cols-3 gap-4 ml-64'>

            <div>
                <img src={img} style={{ width: '600px', height: '300px' }}></img>
            </div>
            <div className='my-24'>
                <p className='text-2xl'>Latest COVID-19 Updates</p>
                <p>Find the resources and information you need about COVID-19. Our COVID-19 Resource Center provides the latest on vaccines, testing, visitor guidelines and the free COVID-19 virtual screening for Indiana residents.</p>
            </div>

        </div>
    );
};

export default Covid;