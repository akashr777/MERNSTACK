import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>SIGN UP</h1>
        <label htmlFor="">Username</label><input type="text" /><br /><br />
        <label htmlFor="">Password</label><input type="password" /><br /><br />
        <label htmlFor="">Confirm Password</label><input type="password" />
    </div>
  )
}

export default Signup