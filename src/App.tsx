import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<>Hi</>} />
        <Route path="/about" element={<>About Us</>} />
        <Route path="/404" element={<>404</>} />
        <Route path="*" element={<Navigate to={'/404'} />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
