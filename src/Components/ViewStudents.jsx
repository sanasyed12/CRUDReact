import React, { useEffect , useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
const ViewStudents = () => {
  const navigate = useNavigate();
  const { studentid } = useParams();
  const [sData, setsData] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:8000/students/${studentid}`)
    .then((res)=>res.json())
    .then((data)=>setsData(data))
    .catch((e)=>console.log(e.message))
  },[]);
  return (
    <div className="container mt-3">
      <button className="btn btn-dark mb-2"
            onClick={() => navigate('/')}
          >
            <FaArrowLeft size={20} style={{ marginRight: '5px' }} />
            Back
          </button>
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-dark text-white text-center py-3 rounded-top-4">
          <h4 className="mb-0">Student Details</h4>
        </div>

        {sData &&  <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>ID:</strong> {sData.id}
            </li>
            <li className="list-group-item">
              <strong>Name:</strong> {sData.name}
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> {sData.phone}
            </li>
            <li className="list-group-item">
              <strong>Place:</strong> {sData.place}
            </li>
          </ul>
        </div>}
      </div>
    </div>

  )
}

export default ViewStudents