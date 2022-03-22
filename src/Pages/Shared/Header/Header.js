import React from 'react';

const Header = () => {

    const links = [
        { name: "Doctor", link: '/doctor' },
        { name: "Testing Lab", link: '/lab' },
        // {name:"",link:'/'},
    ]
    return (
        <div className='md:flex items-center justify-between bg-orange-300 w-full top-0 left-0 px-10 py-4'>
            <div>
                <span className='text-2xl'>The Hospital</span>
            </div>
            <ul className='md:flex md:items-center'>
                {
                    links.map((link) => (
                        <li className='md:ml-8 text-lg'>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Header;