import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Grant from './pages/Grant'
import Donate from './pages/Donate'
import Impact from './pages/Impact'
import Initiatives from './pages/Initiatives'
import Involve from './pages/Involve'
import NewsMedia from './pages/NewsMedia'
import Volunteer from './pages/Volunteer'
import PastEvents from './pages/PastEvents'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/about" element={<About/>} />
      <Route path="/events" element={<Events/>}/>
      <Route path="/grant" element={<Grant/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/impact" element={<Impact/>}/>
      <Route path="/Initiatives" element={<Initiatives/>}/>
       <Route path="/Involve" element={<Involve/>}/>
       <Route path="/news" element={<NewsMedia/>}/>
       <Route path="/volunteer" element={<Volunteer/>}/>
      <Route path="/pastevents" element={<PastEvents/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App