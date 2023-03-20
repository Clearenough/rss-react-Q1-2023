import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/404'} />} />
      </Routes>
    </div>
  );
}

export default App;
