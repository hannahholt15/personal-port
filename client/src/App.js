import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Contacts from './components/contacts/Contacts';
import MainNavbar from './components/shared/MainNavbar';
import About from './components/shared/About';
import Projects from './components/shared/Projects';

const App = () => (
  <> 
    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>

)


export default App;