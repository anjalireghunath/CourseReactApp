import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {

    var [viewlist,setViewlist]=useState([]) 
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then((response)=>{
        console.log(response.data)
        setViewlist(response.data)
        setLoadstatus(false)
    })
  return (
    <div>

<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">CourseTitle</th>
      <th scope="col">Course Description</th>
      <th scope="col">Course Duration</th>
      <th scope="col">Course Venue</th>
      <th scope="col">Cours Date</th>
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      <td>{value.courseTitle}</td>
      <td>{value.courseDescription}</td>
      <td>{value.courseDuration}</td>
      <td>{value.courseVenue}</td>
      <td>{value.courseDate}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>}



                    </div>
               

              </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default View