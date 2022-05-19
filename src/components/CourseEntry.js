import React from 'react'

const CourseEntry = () => {
  return (
    <div>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Course Title</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Duration</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Description</label>
                    <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Venue</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Date</label> 
                    <input type="date" name="" id="" class="form-control"/>
                </div>
                <div class="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default CourseEntry