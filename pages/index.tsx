import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    
    <>
    
      <div className='signinbox-middle'>
        <h1>Sign In</h1>
        <form style={{padding:"1.5em"}}>
          <input type="email" placeholder='Email' /> <br />
          <input type="text" placeholder='Username'/> <br />
          <input type="password" placeholder='Password' /> <br />
          <button className='signin-btn'>Log In</button>
        </form>
      </div>
    </>
    
  )
}

export default Home
