import React from 'react'

const Login = () => {
  return (
    <div className='login'>

        <form action=''>
            <input type="username"  placeholder='Username'/>
            <input type="password"  placeholder='Password'/>
            <button onSubmit={console.log("submitted login")}>Login</button>
        </form>
    </div>
  )
}

export default Login