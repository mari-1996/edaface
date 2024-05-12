import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' index element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
