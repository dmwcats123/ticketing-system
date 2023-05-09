import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element ={<HomePage/>}/>
            <Route path = "/admin-page" element = {<AdminPage/>}/>
            <Route path = "/user-page" element = {<UserPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter