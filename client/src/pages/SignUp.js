import React from 'react'

const SignUp = () => {
  return (
    <div className='signup'>

    <form action=''>
    <input type="text"  placeholder='Full Name'/>

        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <button onSubmit={console.log("registered!")}>Sign Up</button>
    </form>
</div>
  )
}

export default SignUp