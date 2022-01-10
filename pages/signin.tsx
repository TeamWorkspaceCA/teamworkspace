import type { NextPage } from 'next'
import {FaGoogle, FaApple, FaMicrosoft} from 'react-icons/fa'

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
            <div className='btn--link' style={{textAlign: 'center'}}>Don't have an account? Sign up here</div>
        </form>
      </div>
    </>
  )
}

export default signin

/* <div>
            <p style={{fontSize: '0.7em'}}>Or sign in with...</p>

            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <div className='btn--icon'>
                    <FaGoogle />
                    <span>Google</span>
                </div>
                <div className='btn--icon'>
                    <FaApple />
                    <span>Apple</span>
                </div>
                <div className='btn--icon'>
                    <FaMicrosoft />
                    <span>Microsoft</span> */