/* eslint-disable no-unused-vars */
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';        // about nrdia
import {AboutClg} from './pages/AboutClg';     // about clg
import {Schedule} from './pages/Schedule';     // schedule
import {Contact} from './pages/Contact';       // contact
import {Faq} from './pages/Faq';               // faq
import {Header} from './components/Header';
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutnrdia" element={<About />} />
          <Route path="/aboutclg" element={<AboutClg />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
  )
}
