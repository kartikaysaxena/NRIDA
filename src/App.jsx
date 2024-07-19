/* eslint-disable no-unused-vars */
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';        // about NRIDA
import {AboutClg} from './pages/AboutClg';     // about clg
import {Schedule} from './pages/Schedule';     // schedule
import {Contact} from './pages/Contact';       // contact
import {Header} from './components/Header';     // resources
import "./app.css";
import { Resources } from './pages/Resourses';

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutNRIDA" element={<About />} />
          <Route path="/aboutclg" element={<AboutClg />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Resources />} />
        </Routes>
    </BrowserRouter>
  )
}
