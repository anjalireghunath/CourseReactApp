import React, { useState } from 'react'
import Header from './Header'

const CourseEntry = () => {
    var [title,setTitle]=useState("")
    var [duration,setDuration]=useState("")
    var [description,setDescription]=useState("")
    var [venue,setVenue]=useState("")
    var [date,setDate]=useState("")
    const subData=()=>{
        const data={"courseTitle":title,"courseDuration":duration,"courseDescription":description,"courseVenue":venue,"courseDate":date}
        console.log(data)
    }
  return (
    <div>
<Header/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Course Title</label>
                    <input onChange={(a)=>{setTitle(a.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Duration</label>
                    <input onChange={(a)=>{setDuration(a.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Description</label>
                    <textarea onChange={(a)=>{setDescription(a.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Venue</label>
                    <input onChange={(a)=>{setVenue(a.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Date</label> 
                    <input onChange={(a)=>{setDate(a.target.value)}} type="date" name="" id="" class="form-control"/>
                </div>
                <div class="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default CourseEntry