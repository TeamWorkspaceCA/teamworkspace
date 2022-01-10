import React, { useEffect, useState } from 'react'
import GetDeviceSize, { deviceSize } from '../lib/getDeviceSize';

const Navbar = () => {
    let [deviceSize, setDeviceSize] = useState<deviceSize>('pc');

    useEffect(()=>{
        setInterval(() => {
            if(typeof window != 'undefined') {
                setDeviceSize(GetDeviceSize(window));
            }

            console.log(deviceSize);
        }, 50);
    }, []);

    return (
        <div className='navbar'>
            <div className='navbar-btn'>Home</div>
            <div className='navbar-btn' style={{float: "right"}}>Contact Us</div>
            <div className='navbar-btn' style={{float: "right"}}>Sign In</div>
            <div className='navbar-btn' style={{float: "right"}}>Sign Up</div>
            <div className='navbar-btn'>Packages</div>
        </div>
    )
}

export default Navbar
