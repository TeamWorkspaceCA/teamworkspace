import type { NextPage } from 'next'
import Link from 'next/link'

const signup: NextPage = () => {
  return (
    <>
      <div className='signinbox-middle'>
        <h1>Sign Up</h1>
        <form style={{padding:"1.5em"}}>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="email" placeholder='Email' />
            <input type="phone" placeholder='Phone Number' />
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' /> 
            <div className='signin-btn'>Sign Up</div>
            <Link href={'signin'}>
                <div className='btn--link' style={{textAlign: 'center'}}>
                    Already have an account? Sign in here
                </div>
            </Link>  
        </form>
      </div>
    </>
  )
}

export default signup