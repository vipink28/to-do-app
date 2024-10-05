import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './auth/AuthContext';
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Register from './auth/Register';
import Navbar from './components/Navbar';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import TaskList from './pages/TaskList';
//npm install react-router-dom
function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to="/login" />}></Route>
            <Route path='/' element={<Home />}>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/create-task' element={<ProtectedRoute><CreateTask /></ProtectedRoute>}></Route>
            <Route path='/task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
            <Route path='/profile' element={<ProtectedRoute> <Profile /></ProtectedRoute>}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
