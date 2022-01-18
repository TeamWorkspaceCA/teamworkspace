import React, { FC, useEffect, useState } from 'react'
import GetDeviceSize, { deviceSize } from '../lib/getDeviceSize';
import {FaBars} from 'react-icons/fa'
import Link from 'next/link'

interface NavbarLink {
    text: string;
    float?: any;
    href: string;
    ChangeNavbarMenu?: any;
}

const Navbar = () => {
    //let deviceSize: deviceSize = 'pc';
    let [deviceSize, setDeviceSize] = useState<deviceSize>('pc');

    let [links, setLinks] = useState<NavbarLink[]>([
        {text: 'Sign In', float: 'right', href:"/signin"},
        {text: 'Sign Up', float: 'right', href:"/signup"},
        {text: 'Contact Us', float: 'right', href:"/contact"},
        {text: 'Prices', float: 'left', href:"/pricing"}
    ])

    let [navbarOpenState, setNavbarOpenState] = useState<boolean>(true);


    useEffect(()=>{
        setInterval(() => {
            if(typeof window != 'undefined') {
                setDeviceSize(GetDeviceSize(window));
            }
        }, 50);
    }, []);

    let ChangeNavbarMenu = () => {
        setNavbarOpenState(!navbarOpenState);
        
        const menu: any = document.querySelector('.navbar-menu');

        menu.style.animation = `slide-${navbarOpenState ? 'in' : 'out'} 1s infinite`;

        setTimeout(() => {
            menu.style.animation = '';
            menu.style.left = `${navbarOpenState ? '0' : '-100%'}`
        }, 1000)
    }

    return (
        <>
            <div className='navbar'>
                <Link href={'/'}>
                    <div className='navbar-btn' style={{float: deviceSize == 'pc' ? 'left' : 'right'}}>Home</div>
                </Link>

                {deviceSize == 'pc' ? (
                    <>
                        {
                            links.map(x => <NavbarButton ChangeNavbarMenu={()=>{}} text={x.text} float={x.float} href={x.href}/>)
                        }
                    </>
                ) : <>
                    <div className='navbar-btn' onClick={ChangeNavbarMenu} style={{float: 'left'}}>
                        <FaBars/>
                    </div>
                </>}
            </div>
            
            
            <div className="navbar-menu">
                <div className="navbar-items">
                {
                    links.map(x => {
                        return <>
                            <NavbarButton ChangeNavbarMenu={ChangeNavbarMenu} text={x.text} float={''} href={x.href}/>
                        </>
                    })
                }
                </div>
            </div>
            
        </>
    )
}

export default Navbar


const NavbarButton:FC<NavbarLink> = ({text, float, href, ChangeNavbarMenu}) => {
    return <Link href={href}>
        <div key={text} onClick={ChangeNavbarMenu}  className='navbar-btn' style={{float: float}}>
            {text}
        </div>
    </Link>;
}