import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx'
import CreateStudent from './Components/CreateStudent.jsx'
import EditStudent from './Components/EditStudent.jsx'
import ViewStudent from './Components/ViewStudents.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student/view/:studentid' element={<ViewStudent/>}/>
      <Route path='/student/edit/:studentid' element={<EditStudent/>}/>
      <Route path='/student/create' element={<CreateStudent/>}/>
    </Routes>
    </>
  )
}

export default App
