import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const signin: NextPage = () => {
  return (
    <>
      <div className='signinbox-middle'>
        <h1>Sign In</h1>
        <form style={{padding:"1.5em"}}>
            <input type="text" placeholder='Email or Username' />
            <input type="password" placeholder='Password' /> 
            <div className='btn--link'>Forgot Password?</div>
            <div className='signin-btn'>Sign In</div>
        </form>
      </div>
    </>
  )
}

export default signin
