import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { UploadPage } from './pages/uploadPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UploadPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
