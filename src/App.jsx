// src/App.js
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Pages/Home';
import About from './Pages/About';
import NewRegister from './Pages/NewRegistration';
import ExistingRegistration from './Pages/ExistingRegistration';
import AdminLogin from './Pages/Login/AdminLogin';
import StudentLogin from './Pages/Login/StudentLogin';
import SHomePage from './Pages/Student/HomePage';
import Vacate from './Pages/Student/Vacate';
import AHomePage from './Pages/Admin/HomePage';
import Transition from './components/Transition';
import Contacts from './Pages/ContactPage';

function App() {
  const location = useLocation();

  return (

    <AnimatePresence mode='wait'>
      <motion.div key={location.pathname} className="relative">
        <Transition />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-student-register" element={<NewRegister />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/existing-student-register" element={<ExistingRegistration />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-profile" element={<SHomePage />} />
          <Route path="/student-vacate" element={<Vacate />} />
          <Route path="/admin-home" element={<AHomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
