import React from 'react'
import { Link } from 'react-router-dom'

const StudyPost = () => {
  return (
    <Link to="/c/study-post">
     <div className='study-post'>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1683880731495-ae0f4bf18c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      </div>
      <h1>Project Case Study Title</h1>
      <Link to="/author"> Author Name</Link>
      <p>This is the dummy description about this case study... you can know more about here...</p>
    </div>
    </Link>
   
  )
}

export default StudyPost