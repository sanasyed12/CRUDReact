import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
const EditStudent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  const [validation, setValidation] = useState(false)
  const { studentid } = useParams();
  // const [sData, setsData] = useState({})
  useEffect(() => {
    fetch(`http://localhost:8000/students/${studentid}`)
      .then((res) => res.json())
      .then((data) =>{
        setId(data.id)
        setName(data.name)
        setPlace(data.place)
        setPhone(data.phone)
      })
      .catch((e) => console.log(e.message))
  }, []);
  const handleSubmit = (e) => {
  e.preventDefault();
   const studentData = {id,name,place,phone};
   console.log(studentData)
      fetch(`http://localhost:8000/students/${studentid}` ,
        {
          method:'PUT',
          headers :{
            'content-type' : 'application-json'
          },
         body : JSON.stringify(studentData)
        })
        .then((res)=>{
        alert("Student Data Updated Successfully!")
       navigate('/')
      })
        .catch((e)=>console.log(e))
  }
  return (
    <div className="container">
      <div className="container mt-4">
        <div className="card shadow p-4">
          <div>
            <button className="btn btn-dark"
              onClick={() => navigate('/')}
            >
              <FaArrowLeft size={20} style={{ marginRight: '5px' }} />
              Back
            </button>
            <h2 className="text-center mb-2">Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID :</label>
                <input type="text" className="form-control" id="id" name="id" value={id} onChange={e => setId(e.target.value)} onMouseDown={() => setValidation(true)} required placeholder="Enter student ID" />
                {id.length === 0 && validation && <span className=" text-danger">Please Enter your ID.</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name :</label>
                <input type="text" className="form-control" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required onMouseDown={() => setValidation(true)} placeholder="Enter full name" />
                {name.length === 0 && validation && <span className=" text-danger">Please Enter your Name.</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="place" className="form-label">Place :</label>
                <input type="text" className="form-control" id="place" name="place"
                  value={place} required onChange={e => { setPlace(e.target.value) }} onMouseDown={() => setValidation(true)} placeholder="Enter place" />
                {place.length === 0 && validation && <span className=" text-danger">Please Enter your Place Name.</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone :</label>
                <input type="tel" className="form-control" id="phone" name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  onMouseDown={() => setValidation(true)}
                  required
                  placeholder="Enter phone number" />
                {phone.length === 0 && validation && <span className=" text-danger">Please Enter your Phone Numer.</span>}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-dark" >Edit Student </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditStudent