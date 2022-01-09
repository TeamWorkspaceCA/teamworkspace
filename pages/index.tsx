import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    
    <>
    
      <div className='signinbox-middle'>
        <h1>Sign In</h1>
        <form style={{padding:"1.5em"}}>
          <input type="email" placeholder='Email/Username' /> <br />
          <input type="password" placeholder='Password' /> <br />
        </form>
        <button className='signin-btn'>Log In</button>
      </div>
    </>
    
  )
}

export default Home
