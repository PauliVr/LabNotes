import './App.css';
import LogIn from './views/LogIn.js';
import Register from './views/Register.js';
import Error404 from './views/Error404';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import NewNote from './views/NewNote';
import DiseñoDashboard from './views/DiseñoDashboard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/NuevaNota' element={<NewNote />} />
        <Route path='/dash' element={<DiseñoDashboard />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
