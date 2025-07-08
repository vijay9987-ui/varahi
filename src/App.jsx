import { Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import PrivacyAndPolicy from './pages/Privacy&Policy';
import TermsAndConditions from './pages/Terms&Conditions';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  )
}

export default App
