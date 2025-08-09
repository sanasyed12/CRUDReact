import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const [students, setStudents] = useState([])
  const Navigate = useNavigate()
  const DisplayDetails=(id)=>{
    Navigate(`/student/view/${id}`)
  }
  const EditDetails=(id)=>{
     Navigate(`/student/edit/${id}`)
  }
  const RemoveDetails=(id)=>{
    if(window.confirm("You Sure Bro!?")){
        fetch(`http://localhost:8000/students/${id}` ,
        {
          method:'DELETE',
        })
        .then((res)=>{
        alert("Student Data Removed Successfully!")
      window.location.reload()
      })
        .catch((e)=>console.log(e))}
  }
   useEffect(() => {
    fetch('http://localhost:8000/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
      }).catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <div>
      <div className="container my-5">
        <div className="p-2 shadow rounded bg-white">
          <h1 className="text-center my-4">Welcome to My Website</h1>
          <Link className="btn btn-dark" to='/student/create'>Add Student Details</Link>
          <table className="table table-bordered table-hover table-striped text-center mt-4">
            <thead className="table-dark">
              <tr>
                <th>S No</th>
                <th>ID</th>
                <th>Name</th>
                <th>Place</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students && students.map((i ,index) => {
                return (
                  <tr key={i.id}>
                    <td>{index+1}</td>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.place}</td>
                    <td>{i.phone}</td>
                    <td>
                      <button onClick={()=>DisplayDetails(i.id)} className="btn btn-sm btn-primary me-3">View</button>
                      <button onClick={()=>EditDetails(i.id)} className="btn btn-sm btn-warning me-3">Edit</button>
                      <button onClick={()=>RemoveDetails(i.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}

              {/* Add more rows here */}
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}

export default Home