import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
              />
              <Route
                path='/create'
                element={user ? <Create /> : <Navigate to='/login' />}
              />
              <Route
                path='/project/:id'
                element={user ? <Project /> : <Navigate to='/login' />}
              />
              <Route
                path='/signup'
                element={user ? <Navigate to='/' /> : <SignUp />}
              />
              <Route
                path='/login'
                element={user ? <Navigate to='/' /> : <Login />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
