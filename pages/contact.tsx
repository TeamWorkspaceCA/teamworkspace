import type { NextPage } from 'next'
import Link from 'next/link'
import { FaDiscord, FaEnvelope } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const contact: NextPage = () => {
    return (
        <>
        <div className='signinbox-middle'>
            <h1>Contact Us</h1>
            <h4 style={{marginTop:'1em'}}>Choose one of these options</h4>
            <div className="contact-btns">
                <a href='https://discord.gg/3JxeAWfQ9T' target="_blank">
                    <div className="btn--icon">
                        <FaDiscord /> Discord
                    </div>
                </a>
                <a href="mailto:teamworkspace.ca@gmail.com">
                    <div className="btn--icon">
                        <FaEnvelope/> Email
                    </div>
                </a>
            </div>
        </div>
        
        </>
)}

export default contact